import { Token } from '../token/token';
import Expression from './expression';
import Identifier from './identifier';
import Statement from './statement';

class LetStatement implements Statement {
  private _token: Token;
  private _name: Identifier;
  private _value: Expression | null;

  constructor(token: Token, name: Identifier, value: Expression | null) {
    this._token = token;
    this._name = name;
    this._value = value;
  }

  statementNode(): void {}

  tokenLiteral(): string {
    return this._token.literal;
  }

  string(): string {
    return `${
      this._token.literal
    } ${this._name.string()} = ${this._value?.string()};`;
  }

  get name(): Identifier {
    return this._name;
  }
}

export default LetStatement;
