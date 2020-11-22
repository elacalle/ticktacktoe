import Player from "./Player";

export default interface PlayerRepository {
  save(player :Player) :void

  get(id: number) :Player

  all() :Player[]
}