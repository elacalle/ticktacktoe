import { Token } from "./Token";

export default interface TokenRepository {
  save(token :Token) :void
}