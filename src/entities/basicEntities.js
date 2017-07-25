export function scene() {
	let scene = document.createElement('a-scene')
	return scene
}

export function block() {
	let entity = document.createElement('a-entity')
	entity.setAttribute('geometry', {
		primitive: 'box',
		height: 1,
		width: 1
	})

	entity.setAttribute('position', {
		x: 0,
		y: 1,
		z: -1.5
	})

	entity.setAttribute('rotation', {
		x: 0,
		y: 25,
		z: 0
	})
	return entity
}
