import { Token } from '../token/token';
import Expression from './expression';
import Statement from './statement';

class ReturnStatement implements Statement {
  private _token: Token;
  private _returnValue: Expression | null;

  constructor(token: Token, returnValue: Expression | null) {
    this._token = token;
    this._returnValue = returnValue;
  }

  statementNode(): void {}

  tokenLiteral(): string {
    return this._token.literal;
  }

  string(): string {
    return `${this.tokenLiteral()} ${this._returnValue?.string()};`;
  }
}

export default ReturnStatement;
