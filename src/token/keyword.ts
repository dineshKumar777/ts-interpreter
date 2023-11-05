import { TokenType } from './token-type';

type keyword = { [s: string]: TokenType };

const keywords: keyword = {
  function: TokenType.FUNCTION,
  let: TokenType.LET,
  true: TokenType.TRUE,
  false: TokenType.FALSE,
  if: TokenType.IF,
  else: TokenType.ELSE,
  return: TokenType.RETURN,
};

const lookupIdent = (ident: string): TokenType => {
  if (keywords[ident]) {
    return keywords[ident];
  }
  return TokenType.IDENT;
};

export default lookupIdent;
