function supportsWorkerType() {
  let supports = false
  const tester = {
    get type() { supports = true }
  }
  try {
    new Worker('blob://', tester).terminate()
  } finally {
    return supports
  }
}

function prepareRunChecker({ timerDelay }) {
  let lasEvent = Date.now()

  return {
    shouldRun() {
      const result = (Date.now() - lasEvent) > timerDelay
      if (result) lasEvent = Date.now()

      return result
    }
  }
}

export {
  supportsWorkerType,
  prepareRunChecker
}