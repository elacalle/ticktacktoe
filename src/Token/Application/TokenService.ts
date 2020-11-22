import TokenRepository from "../Domain/TokenRespository";
import { Token, TokenType } from "../Domain/Token";
import TokenInMemoryRepository from "../Infrastructure/TokenInMemoryRepository";

export default class TokenService {
  private repository :TokenRepository;

  constructor(respository :TokenRepository = new TokenInMemoryRepository) {
    this.repository = respository;
  }

  createToken(token :number, x :number, y: number) :void {
    const tokenType :TokenType = token;

    this.repository.save(new Token(tokenType, x, y));
  }
}