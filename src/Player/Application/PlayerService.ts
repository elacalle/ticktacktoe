import { TokenType } from "../../Token/Domain/Token";
import Player from "../Domain/Player";
import PlayerRepository from "../Domain/PlayerRepository";
import PlayerInMemoryRepository from "../Infrastructure/PlayerInMemoryRepository";

export default class PlayerService {
  private repository :PlayerRepository

  public constructor(repository :PlayerRepository = new PlayerInMemoryRepository) {
    this.repository = repository;
  }

  public create(id :string, name :string) : void {

    const tokenType = this.all().length !== 1 ? TokenType.Eks : TokenType.Ways; 
    this.repository.save(new Player(id, name, tokenType));
  }

  public get(id :number) :Player {
    return this.repository.get(id);
  }

  public all() :Player[] {
    return this.repository.all();
  }
}