import { TokenType } from './token-type';

type keyword = { [s: string]: TokenType };

const keywords: keyword = {
  function: TokenType.FUNCTION,
  let: TokenType.LET,
};

const lookupIdent = (ident: string): TokenType => {
  if (keywords[ident]) {
    return keywords[ident];
  }
  return TokenType.IDENT;
};

export default lookupIdent;
