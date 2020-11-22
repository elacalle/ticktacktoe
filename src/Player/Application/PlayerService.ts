import { TokenType } from "../../Token/Domain/Token";
import Player from "../Domain/Player";
import PlayerRepository from "../Domain/PlayerRepository";
import PlayerInMemoryRepository from "../Infrastructure/PlayerInMemoryRepository";

export default class PlayerService {
  private repository :PlayerRepository
  private currentPlayer :Player;

  public constructor(repository :PlayerRepository = new PlayerInMemoryRepository) {
    this.repository = repository;
  }

  public create(id :string, name :string) : void {
    const tokenType = this.all().length !== 1 ? TokenType.Eks : TokenType.Ways; 
    this.currentPlayer = new Player(id, name, tokenType);

    this.repository.save(this.currentPlayer);
  }

  public get(id :string) :Player {
    return this.repository.get(id);
  }

  public all() :Player[] {
    return this.repository.all();
  }

  public current() :Player {
    return this.currentPlayer;
  }

  public switch() :void {
    const [nextPlayer] = this.repository.query((player :Player) => { return !player.equals(this.currentPlayer); });

    this.currentPlayer = nextPlayer;
  }
}