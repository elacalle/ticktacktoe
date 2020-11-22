import Player from "../Domain/Player";
import PlayerRepository from "../Domain/PlayerRepository";

export default class PlayerInMemoryRepository implements PlayerRepository {
  private store :Player[] = []

  save(player :Player) :void {
    this.store.push(player);
  }

  get(id: string) :Player {
    const player :Player = this.query((player :Player) => {return player.equalsId(id);})[0];

    return player;
  }

  query(callback :any): Player[] {
    const storeQuery :Player[] = this.store.filter(player => {return callback(player);});

    return storeQuery;
  }

  all(): Player[] {
    const storeCopy :Player[] = Object.assign([], this.store);

    return storeCopy;
  }
}