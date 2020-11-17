import Player from "../Domain/Player";
import PlayerRepository from "../Domain/PlayerRepository";

export default class PlayerInMemoryRepository implements PlayerRepository {
  private store :Player[] = []

  save(object :Player) :void {
    this.store.push(object);
  }

  get(id: string) :Player {
    const player = this.store.find((item :Player) => {
      return item.equals(id);
    });

    return player;
  }

  all(): Player[] {
    const storeCopy :Player[] = Object.assign([], this.store);

    return storeCopy;
  }
}