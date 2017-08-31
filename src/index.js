import 'aframe'
import '../lib/aframe-ar.js'
import * as SceneB from './scene.js'
import Entity from './entity.js'
import  Config from './file.js'

var data = require('./jsonTest.json')

// generates a basic scene and appends a basic block to it
export let { scene, container, camera } = SceneB.scene()
// renders the scene
document.body.appendChild(scene)
console.log(data)

function configuration(doc) {
  //import Config from './'+doc.aframe+'.js'
  let conf = new Config(doc)
  return conf
}

for (var i = 0; i < Object.keys(data).length; i++) {
  // Array of entities - state machine - REACT
  const tempEntity = new Entity(configuration(data[i]))
  container.appendChild(tempEntity._a_entity)
}
