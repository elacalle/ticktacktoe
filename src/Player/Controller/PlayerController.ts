import PlayerService from "../Application/PlayerService";

export default class PlayerController {
  private playerService :PlayerService 

  constructor() {
    this.playerService = new PlayerService();
  }

  async create(name: string, playerNumber : number) {
    const id :string =  new Date().getTime().toString(16);

    this.playerService.create(id, name, playerNumber)
  }

  public index() :any {
    return this.playerService.all();
  }
}