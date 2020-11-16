import Player from "../Domain/Player";
import PlayerRepository from "../Domain/PlayerRepository";

export default class PlayerInMemoryRepository implements PlayerRepository {
  private store :Player[] = []

  save(object: any) {
    this.store.push(object);
  }

  get(id: string) {
    const player = this.store.find((item :any) => {
      return item.id === id
    });

    return player;
  }

  all(): Player[] {
    const storeCopy :Player[] = Object.assign([], this.store);

    return storeCopy;
  }
}