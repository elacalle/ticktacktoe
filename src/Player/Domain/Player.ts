import { Token } from "../../Token";

export default class Player {
  private id :string
  private name :string
  private token :Token

  constructor (id: string, name :string, token: Token) {
    this.id = id;
    this.name = name;
    this.token = token;
  }
}