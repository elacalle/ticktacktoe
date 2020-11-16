enum TokenType {
  Eks,
  Ways
}

class Token {
  private type :TokenType;

  constructor(token :TokenType) {
    this.type = token;
  }
}

export {TokenType, Token};