class Entity {
  constructor(primitive, height, width, position_x, position_y, position_z,
    rotation_x, rotation_y, rotation_z, color
  ) {
    this._primitive = primitive
    this._height = height
    this._width = width
    this._position_x = position_x
    this._position_y = position_y
    this._position_z = position_z
    this._rotation_x = rotation_x
    this._rotation_y = rotation_y
    this._rotation_z = rotation_z
    this._color = color
    this._a_entity = document.createElement('a-entity')
    this.updateEntity()
  }

  setPrimitive(primitive) {
    this._primitive = primitive
  }
  setHeigth(height) {
    this._height = height
  }
  setWidth(width) {
    this._width = width
  }
  setPosition_x (position_x) {
    this._position_x = position_x
  }
  setPosition_y(position_y) {
    this._position_y = position_y
  }
  setPosition_z(position_z) {
    this._position_z = position_z
  }
  setRotation_x(rotation_x) {
    this._rotation_x = rotation_x
  }
  setRotation_y(rotation_y) {
    this._rotation_y = rotation_y
  }
  setRotation_z(rotation_z) {
    this._rotation_z = rotation_z
  }
  setColor(color) {
    this._color = color
  }
  updateEntity() {
    // Correct
    this._a_entity.setAttribute('geometrotation_y', {
      primitive: this._primitive,
      height: this._height,
      width: this._width
    })
    // TODO: fix names : position_x ,  position_y ...
    this._a_entity.setAttribute('position', {
      x: this._position_x ,
      y: this._position_y,
      z: this._position_z
    })
    this._a_entity.setAttribute('rotation', {
      x: this._rotation_x,
      y: this.rotation_y,
      z: this.rotation_z
    })
    this._a_entity.setAttribute('color', {
      color: this._color
    })
  }
}
