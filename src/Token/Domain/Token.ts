enum TokenType {
  Eks,
  Ways
}

class Token {
  private type :TokenType;
  private x :number;
  private y :number;

  constructor(token :TokenType, x :number, y :number) {
    this.type = token;
    this.x = x;
    this.y = y;
  }
}

export {TokenType, Token};