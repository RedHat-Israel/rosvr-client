import 'aframe'
import '../lib/aframe-ar.js'
import * as BasicEntities from './entities/basicEntities.js'
import json from './jsonTest.json'

// generates a basic scene and appends a basic block to it
let {
	scene,
	container,
	camera
} = BasicEntities.scene()
var counter = 0

for (var i = 0; i < Object.keys(json).length; i++) {
	counter += 0.5
	container.appendChild(BasicEntities.createEntity(json[i].threeDType, json[i].threeDHigth, json[i].threeDWidth, 0, 0, counter, 0, 25, 0, '#4CC3D9'))
}
// renders the scene
document.body.appendChild(scene)
