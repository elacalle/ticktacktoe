import PlayerService from "../Application/PlayerService";
import Player from "../Domain/Player";

export default class PlayerController {
  private service :PlayerService 
  MAX_PLAYERS = 2;

  constructor() {
    this.service = new PlayerService();
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  index() :any {
    return this.service.all();
  }

  create(name: string) :void {
    if(!(this.index().length < this.MAX_PLAYERS)) {
      throw 'Player number exceeded';
    }

    const id :string =  new Date().getTime().toString(16);
    this.service.create(id, name);
  }

  get(id :number) :Player {
    return this.service.get(id);
  }

  playersReady() :boolean {
    return this.index().length === this.MAX_PLAYERS; 
  }
}