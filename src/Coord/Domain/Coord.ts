export default class Coord {
  MIN_RANGE = 0
  MAX_RANGE = 2
  x :number;
  y :number;

  constructor(x :number, y :number) {
    this.x = x;
    this.y = y;
  }

  valid() :boolean {
    return this.validCoord(this.x) && this.validCoord(this.y);
  }

  validCoord(coord :number) :boolean {
    if(coord < this.MIN_RANGE || coord > this.MAX_RANGE)
      return false;

    return true;
  }
}