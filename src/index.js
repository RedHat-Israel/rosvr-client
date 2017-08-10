import 'aframe'
import '../lib/aframe-ar.js'
import * as SceneB from './scene.js'
import json from './jsonTest.json'
import Entity from './entity.js'
import * as Config from './file.js'

// generates a basic scene and appends a basic block to it
export let { scene, container, camera } = SceneB.scene()
// renders the scene
document.body.appendChild(scene)

function configuration(doc) {
  //import Config from './'+doc.aframe+'.js'
  return Config.Config(doc)
}

for (var i = 0; i < Object.keys(json).length; i++) {
  // Array of entities - state machine - REACT
  var tempEntity = new Entity(configuration(json[i]))
  tempEntity.addToContainer(container)
}
