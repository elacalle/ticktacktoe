import Player from "./Player";

export default interface PlayerRepository {
  save(player :Player) :void

  get(id: string) :Player

  all() :Player[]

  query(callback :any) :Player[]
}