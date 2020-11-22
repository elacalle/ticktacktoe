import TokenService from "../Application/TokenService";

export default class TokenController {
  private service :TokenService;

  constructor() {
    this.service = new TokenService;
  }

  create(token :number, x :number, y :number) : void {
    this.service.createToken(token, x, y);
  }
}