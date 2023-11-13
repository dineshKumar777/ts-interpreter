import { Token } from '../token/token';
import Expression from './expression';

class Identifier implements Expression {
  private _token: Token;
  private _value: string;

  constructor(token: Token, value: string) {
    this._token = token;
    this._value = value;
  }

  expressionNode(): void {}

  tokenLiteral(): string {
    return this._token.literal;
  }

  string(): string {
    return this._value;
  }

  public get value(): string {
    return this._value;
  }
}

export default Identifier;
