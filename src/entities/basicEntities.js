/**
 * generates the basic scene elements
 * @return {object} An object containing the scene,
 *                  AR content container and default camera
 */
export function scene() {

	// creates the scene element with the AR.js component
	let scene = document.createElement('a-scene')
	scene.setAttribute('artoolkit', '')

	// creates the marker container on which system objects are mapped
	// sets the marker to the HIRO marker preser
	// TODO change marker to QR barcode and test stability
	let container = document.createElement('a-marker')
	container.setAttribute('preset', 'hiro')
	scene.appendChild(container)

	// set default camera with look controls and places it in scene
	let camera = document.createElement('a-entity')
	camera.setAttribute('camera', '')
	camera.setAttribute('look-control', '')
	scene.appendChild(camera)

	return { scene, container, camera }
}

/**
 * generates a entity with basic geometry and positioning parameters
 * @return {element} element abstracted
 * make sure the input is correct according to a-frame
 */

export function createEntity(shape,height,width,px,py,pz,rx,ry,rz,color){
	let entity = document.createElement('a-entity')
	entity.setAttribute('geometry', {
		primitive: shape,
		height: height,
		width: width
	})

	entity.setAttribute('position', {
		x: px,
		y: py,
		z: pz
	})

	entity.setAttribute('rotation', {
		x: rx,
		y: ry,
		z: rz
	})
	entity.setAttribute('color', {
		color : color
	})
	return entity
}


export function block() {
	// TODO extract block parameters to function call
	let entity = document.createElement('a-entity')
	entity.setAttribute('geometry', {
		primitive: 'box',
		height: 1,
		width: 1
	})

	entity.setAttribute('position', {
		x: 0,
		y: 0,
		z: 0.5
	})

	entity.setAttribute('rotation', {
		x: 0,
		y: 25,
		z: 0
	})
	entity.setAttribute('color', {
		color : '#4CC3D9'
	})
	return entity
}
export function blockTwo() {
	// TODO extract block parameters to function call
	let entity = document.createElement('a-entity')
	entity.setAttribute('geometry', {
		primitive: 'box',
		height: 2,
		width: 2
	})

	entity.setAttribute('position', {
		x: 0,
		y: 2,
		z: 1.23
	})

	entity.setAttribute('rotation', {
		x: 0,
		y: 50,
		z: 0
	})
	return entity
}
