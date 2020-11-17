import PlayerService from "../Application/PlayerService";

export default class PlayerController {
  private playerService :PlayerService 

  constructor() {
    this.playerService = new PlayerService();
  }

  create(name: string, playerNumber : number) :void {
    const id :string =  new Date().getTime().toString(16);

    this.playerService.create(id, name, playerNumber)
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  index() :any {
    return this.playerService.all();
  }
}