import "https://unpkg.com/@tensorflow/tfjs-core@2.4.0/dist/tf-core.js" //ferramentas, entendimento de código
import "https://unpkg.com/@tensorflow/tfjs-converter@2.4.0/dist/tf-converter.js"//pacote utilitário, dependência do core
import "https://unpkg.com/@tensorflow/tfjs-backend-webgl@2.4.0/dist/tf-backend-webgl.js"//lib de gráficos, performance ao renderizar no navegador
import "https://unpkg.com/@tensorflow-models/face-landmarks-detection@0.0.1/dist/face-landmarks-detection.js"

import Service from "../services/service.js"

// no processo principal é window
// no worker é self
const { tf, faceLandmarksDetection } = self

tf.setBackend('webgl')

const service = new Service({
  faceLandmarksDetection
})
console.log('loading tf model')
await service.loadModel()
console.log('tf model loaded')
postMessage('READY')

onmessage = async ({ data: video }) => {
  const response = await service.handBlinked(video)

  if (!response[0]) return;
  
  postMessage({
    blinked: response[0],
    eyeBlinked:response[1]
  })
}