export default class Entity {
  constructor(obj) {
    this._primitive = obj._primitive
    this._hight = obj._hight
    this._width = obj._width
    this._position_x = obj._position_x
    this._position_y = obj._position_y
    this._position_z = obj._position_z
    this._rotation_x = obj._rotation_x
    this._rotation_y = obj._rotation_y
    this._rotation_z = obj._rotation_z
    this._color = obj._color
    this._a_entity = document.createElement('a-entity')
    this.updateEntity()
  }

  setPrimitive(primitive) {
    this._primitive = primitive
  }
  setHeigth(height) {
    this._hight = height
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
    this._a_entity.setAttribute('geometry', {
      primitive: this._primitive,
      height: this._hight,
      width: this._width
    })
    // TODO: fix names : position_x ,  position_y ...
    this._a_entity.setAttribute('position',
      this._position_x + ' ' +
      this._position_y + ' ' +
      this._position_z
    )
    this._a_entity.setAttribute('rotation', {
      x: this._rotation_x,
      y: this.rotation_y,
      z: this.rotation_z
    })
    this._a_entity.setAttribute('material', 'color: ' + this._color)
    this._a_entity.setAttribute('id', 'alex')
  }
}
