import { Token } from "../Domain/Token";
import TokenRepository from "../Domain/TokenRespository";

export default class TokenInMemoryRepository implements TokenRepository {
  private store :Token[] = [];

  save(token :Token): void {
    this.store.push(token);
  }
}