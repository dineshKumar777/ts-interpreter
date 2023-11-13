import { TokenType } from './token-type';

export class Token {
  type: TokenType;
  literal: string;

  constructor(type: TokenType, literal: string) {
    this.type = type;
    this.literal = literal;
  }
}
