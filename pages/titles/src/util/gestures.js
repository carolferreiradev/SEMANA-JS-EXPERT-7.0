const { GestureDescription, Finger, FingerCurl } = window.fp

const ScrollDownGesture = new GestureDescription('scroll-down'); // ⬇️
const ScrollUpGesture = new GestureDescription('scroll-up'); // ⬆️
const RockAndRollGesture = new GestureDescription('rock-and-roll'); // 🎸


// Rock
// -----------------------------------------------------------------------------

// thumb: half curled
// accept no curl with a bit lower confidence
ScrollDownGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
ScrollDownGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.5);

// all other fingers: curled
for (let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
  ScrollDownGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
  ScrollDownGesture.addCurl(finger, FingerCurl.HalfCurl, 0.9);
}


// Rock and Roll
// -----------------------------------------------------------------------------

RockAndRollGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
RockAndRollGesture.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);

RockAndRollGesture.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
RockAndRollGesture.addCurl(Finger.Middle, FingerCurl.HalfCurl, 0.9);

RockAndRollGesture.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);
RockAndRollGesture.addCurl(Finger.Ring, FingerCurl.HalfCurl, 0.9);

RockAndRollGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
RockAndRollGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.5);


// Paper
// -----------------------------------------------------------------------------

// no finger should be curled
for (let finger of Finger.all) {
  ScrollUpGesture.addCurl(finger, FingerCurl.NoCurl, 1.0);
}

const knownGestures = [
  ScrollDownGesture, ScrollUpGesture, RockAndRollGesture
]

const gestureStrings = {
  'scroll-up': '⬆️',
  'scroll-down': '⬇️',
  'rock-and-roll':'🎸'
}

export {
  knownGestures,
  gestureStrings
}