import Identifier from '../ast/identifier';
import LetStatement from '../ast/let-statement';
import Program from '../ast/program';
import ReturnStatement from '../ast/return-statement';
import Statement from '../ast/statement';
import { Lexer } from '../lexer/lexer';
import { Token } from '../token/token';
import { TokenType } from '../token/token-type';

class Parser {
  private _lexer: Lexer;
  private _curToken!: Token;
  private _peekToken!: Token;
  private _errors: string[];

  constructor(lexer: Lexer) {
    this._lexer = lexer;
    this._errors = [];
    this.nextToken();
    this.nextToken();
  }

  public get errors(): string[] {
    return this._errors;
  }

  public parseProgram(): Program {
    const program: Program = new Program();
    while (this._curToken.type !== TokenType.EOF) {
      const stmt: Statement | null = this.parseStatement();
      if (stmt) {
        program.appendStatement(stmt);
      }
      this.nextToken();
    }
    return program;
  }

  private nextToken(): void {
    this._curToken = this._peekToken;
    this._peekToken = this._lexer.nextToken();
  }

  private parseStatement(): Statement | null {
    switch (this._curToken.type) {
      case TokenType.LET:
        return this.parseLetStatement();
      case TokenType.RETURN:
        return this.parseReturnStatement();
      default:
        return null;
    }
  }

  private parseLetStatement(): LetStatement | null {
    const localToken: Token = this._curToken;
    if (!this.expectPeek(TokenType.IDENT)) {
      return null;
    }

    const name: Identifier = new Identifier(
      this._curToken,
      this._curToken.literal
    );

    if (!this.expectPeek(TokenType.ASSIGN)) {
      return null;
    }

    // TODO: Skip expression until semicolon
    while (!this.curTokenIs(TokenType.SEMICOLON)) {
      this.nextToken();
    }
    return new LetStatement(localToken, name, null);
  }

  private parseReturnStatement(): ReturnStatement | null {
    const localToken: Token = this._curToken;
    this.nextToken();
    while (!this.curTokenIs(TokenType.SEMICOLON)) {
      this.nextToken();
    }
    return new ReturnStatement(localToken, null);
  }

  private curTokenIs(t: TokenType): boolean {
    return this._curToken.type === t;
  }

  private peekTokenIs(t: TokenType): boolean {
    return this._peekToken.type === t;
  }

  private expectPeek(t: TokenType): boolean {
    if (this.peekTokenIs(t)) {
      this.nextToken();
      return true;
    }
    this.peekError(t);
    return false;
  }

  private peekError(t: TokenType): void {
    const msg = `expected next token to be ${t}, got ${this._peekToken.type} instead`;
    this._errors.push(msg);
  }
}

export default Parser;
