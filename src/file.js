class Config {
  constructor(json) {
    // TODO fix:
    //return this.primitive(json.type) height, width, position_x, position_y, position_z,
    //  rotation_x, rotation_y, rotation_z, color

    this._position_x = 0
    this._position_y = 0
    this.position_z = 0
    this.rotation_x = 0

    this.rotation_y += 0

    this.rotation_z = 0
    this.higth = 1
    this.Width = 1
    this.color = this.coloring(10000)
    return this.primitive(json.type), 0, 0, 0,0,0,0,1,1,'#000099'
  }
  primitive(type) {
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
  // numberOfObjects(json){
  //   var num
  //   for (var i = 0; i < Object.keys(json).length; i++) {
  //      num++
  //   }
  //   return num
  // }
  // if (Config.thetha == 360) {
  //   Config.px = 0
  //   Config.py = 0
  //   Config.rz++
  //     Config.ry = 0
  //   Config.thetha = 0
  // }
  // Config.thetha += 30
  // Config.radius = numberOfObjects(json) * 10
  // Config.position_x += Config.radius + Config.position_x * Math.cos(Config.thetha)

  // Config.position_y += Config.radius + Config.position_y * Math.cos(Config.thetha)

  // Config.position_z = 0

  // Config.rotation_x = 0
  // Config.rotation_y += Config.thetha
  // Config.rotation_z = 0

  //obj.entity = createEntity(obj.shape, obj.higth, obj.Width, Config.px, Config.py, Config.pz, Config.rx, Config.ry, Config.rz, obj.color)
  //container.appendChild(obj.entity)


}
