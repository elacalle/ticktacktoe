import { Token, TokenType } from "../../Token";
import Player from "../Domain/Player";
import PlayerRepository from "../Domain/PlayerRespository";
import PlayerInMemoryRepository from "../Infrastructure/PlayerInMemoryRepository";

export default class PlayerService {
  private repository :PlayerRepository

  public constructor(repository :PlayerRepository = new PlayerInMemoryRepository) {
    this.repository = repository;
  }

  public create(id :string, name :string, playerNumber : number) : void {
    const token = playerNumber !== 1 ? TokenType.Eks : TokenType.Ways; 

    this.repository.save(new Player(id, name, new Token(token)))
  }

  public all() :Player[] {
    return this.repository.all()
  }
}