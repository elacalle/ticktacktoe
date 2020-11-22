import TokenController from "./Token/Controller/TokenController";
import CoordController from "./Coord/Controller/CoordController";
import PlayerController from "./Player/Controller/PlayerController";
import read from "./Read";

class Main {
  playerController :PlayerController = new PlayerController();
  TokenController :TokenController = new TokenController();
  CoordsController :CoordController = new CoordController();

  public constructor() {
    this.bootstrap();
  }

  private async bootstrap() {
    await this.setupPlayers(); 
    await this.play(); 
  }

  private async play() {
    do {
      await this.insertToken();
      this.switchPlayer();
    } while (!this.win());
  }

  private async setupPlayers() {
    do {
      this.playerController.create(await read('Whats your name?\n'));
    } while (!this.playerController.playersReady());
  }

  private async generateCoords() {
    let coord;

    do {
      try {
        coord = this.CoordsController.create(
          await read('Choose X axis\n'),
          await read('Choose Y axis\n')
        );
      } catch (exception) {
        console.log(exception);
      }
    } while (!coord);

    return coord;
  }

  private async insertToken() {
    const coord = await this.generateCoords();

    this.TokenController.create(
      this.playerController.current().token,
      coord.x,
      coord.y
    );
  }
  
  private switchPlayer () :void {
    this.playerController.switch();
  }

  private win() :boolean {
    // TODO
    return false;
  }
}

new Main();