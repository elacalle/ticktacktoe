import TokenController from "./Token/Controller/TokenController";
import CoordController from "./Coord/Controller/CoordController";
import PlayerController from "./Player/Controller/PlayerController";
import { TokenType } from "./Token/Domain/Token";
import read from "./Read";

class Main {
  playerController :PlayerController = new PlayerController()
  TokenController :TokenController = new TokenController()
  CoordsController :CoordController = new CoordController();
  token :TokenType = TokenType.Eks;

  public constructor() {
    this.bootstrap();
  }

  private async bootstrap() {
    await this.setupPlayers(); 
    await this.play(); 
  }

  private async play() {
    this.insertToken();
  }

  private async insertToken() {
    this.token = this.token === TokenType.Eks  ? TokenType.Ways : TokenType.Eks;
    const coord = this.CoordsController.create(await read('Choose X axis\n'), await read('Choose Y axis\n'));
    this.TokenController.create(this.token, coord.x, coord.y);
  }

  private async setupPlayers() {
    do {
      this.playerController.create(await read('Whats your name?\n'));
    } while (!this.playerController.playersReady());
  }
}

new Main();