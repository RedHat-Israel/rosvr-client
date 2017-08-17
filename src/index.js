import 'aframe'
import '../lib/aframe-ar.js'
import * as BasicEntities from './entities/basicEntities.js'
import * as Cookies from '../lib/cookie.js'

var settings = Cookies.getData();

// generates a basic scene and appends a basic block to it
let { scene, container, camera } = BasicEntities.scene()
container.appendChild(BasicEntities.block())

// renders the scene
document.body.appendChild(scene)
