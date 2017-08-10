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

  return {
    scene,
    container,
    camera
  }
}
