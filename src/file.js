export default class Config {
  constructor(json) {
    // TODO fix:
    //return this.primitive(json.type) height, width, position_x, position_y, position_z,
    //  rotation_x, rotation_y, rotation_z, color

    this._position_x = 0
    this._position_y = 0
    this._position_z = 0
    this._rotation_x = 0

    this._rotation_y = 20

    this._rotation_z = 0
    this._hight = 1
    this._width = 1

    this._color = this.coloring(10000)
    this.definePrimitive(json.type)
    //return 'box', 0, 0, 0,0,0,0,1,1,'#000099'

  }
  definePrimitive(type) {

    switch (type) {
    case 'file':
      this._primitive = 'box'
      break
    case 'directory':
      this._primitive = 'cylinder'
      break
    }
  }

  coloring(size) {
    let heatMap = size
    let color = 0
    let colorId = ''
    while (heatMap >= 1024) {
      heatMap = heatMap / 1024
      color++
    }
    switch (color) {
    case 1:
      colorId = '#000099'
      break
    case 2:
      colorId = '#6699ff'
      break
    case 3:
      colorId = '#cc0000'
      break
    case 4:
      colorId = '#ffcccc'
      break
    default:
      colorId = '#000000'
    }
    return colorId
  }
}
