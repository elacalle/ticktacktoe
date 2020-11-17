import Player from "../Domain/Player";
import PlayerRepository from "../Domain/PlayerRepository";

export default class PlayerInMemoryRepository implements PlayerRepository {
  private store :Player[] = []

  save(player :Player) :void {
    this.store.push(player);
  }

  get(id: string) :Player {
    const player = this.store.find((player :Player) => {
      return player.equals(id);
    });

    return player;
  }

  all(): Player[] {
    const storeCopy :Player[] = Object.assign([], this.store);

    return storeCopy;
  }
}