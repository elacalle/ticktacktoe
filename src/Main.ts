import PlayerController from "./Player/Controller/PlayerController";
import puts from "./Puts";
import read from "./Read";

class Main {
  playerController :PlayerController = new PlayerController()

  public constructor() {
    this.bootstrap();
  }

  private async bootstrap() {
    this.setupPlayers(); 
  }

  private async setupPlayers() {
    const MAX_PLAYERS = 2;

    do {
      puts('Whats your name?')
      this.playerController.create(await read(), this.playerAmount())
    } while (this.playerAmount() < MAX_PLAYERS)
  }

  private playerAmount() :number {
    return this.playerController.index().length
  }
}

new Main();