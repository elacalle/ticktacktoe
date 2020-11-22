import Coord from "../Domain/Coord";

export default class CoordController {
  private coord :Coord;

  create(x: string, y: string) :Coord {
   this.coord = new Coord(parseInt(x), parseInt(y));

   if(!this.coord.valid())
     throw 'Invalid coords';

   return this.coord;
  }
}