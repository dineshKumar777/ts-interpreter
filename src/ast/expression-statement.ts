import { Token } from '../token/token';
import Expression from './expression';
import Statement from './statement';

class ExpressionStatement implements Statement {
  private _token: Token;
  private _expression: Expression;

  constructor(token: Token, expression: Expression) {
    this._token = token;
    this._expression = expression;
  }

  statementNode(): void {}
  tokenLiteral(): string {
    return this._token.literal;
  }

  string(): string {
    return this._expression.string();
  }
}

export default ExpressionStatement;
