import { TokenType } from "../../Token/Domain/Token";

export default class Player {
  private id :string
  private name :string
  public token :TokenType

  constructor (id: string, name :string, token: TokenType) {
    this.id = id;
    this.name = name;
    this.token = token;
  }

  equals(id :string) :boolean {
    return this.id === id;
  }
}