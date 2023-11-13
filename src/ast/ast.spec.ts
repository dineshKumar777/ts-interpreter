import { Token } from '../token/token';
import { TokenType } from '../token/token-type';
import Identifier from './identifier';
import LetStatement from './let-statement';
import Program from './program';

describe('AST', () => {
  it('should toString correctly', () => {
    const program = new Program([
      new LetStatement(
        new Token(TokenType.LET, 'let'),
        new Identifier(new Token(TokenType.IDENT, 'myVar'), 'myVar'),
        new Identifier(new Token(TokenType.IDENT, 'anotherVar'), 'anotherVar')
      ),
    ]);

    expect(program.string()).toEqual('let myVar = anotherVar;\n');
  });
});
