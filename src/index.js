import 'aframe'
import 'ar.js'
import * as BasicEntities from './entities/basicEntities.js'

let scene = BasicEntities.scene()
scene.appendChild(BasicEntities.block())

document.body.appendChild(scene)
