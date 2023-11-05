import { Lexer } from '../lexer/lexer';
import { TokenType } from '../token/token-type';

class REPL {
  private _errors: string[];

  constructor() {
    this._errors = [];
  }

  protected handleInputLine(input: string): void {
    const lexer = new Lexer(input);
    let token = lexer.nextToken();
    while (token.type !== TokenType.EOF) {
      console.log(token);
      token = lexer.nextToken();
    }
  }

  public start(input: string): void {
    this.handleInputLine(input);
  }

  public errors(): string[] {
    return this._errors;
  }
}

export default REPL;
