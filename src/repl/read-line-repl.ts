import REPL from './repl';
import { Interface } from 'readline';
import * as readline from 'readline';

class ReadLineREPL extends REPL {
  private _rl: Interface;

  constructor() {
    super();
    this._rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    this._rl.setPrompt('>> ');
  }

  public start(): void {
    this._rl.prompt();
    this._rl.on('line', (line) => {
      this.handleInputLine(line);
      this._rl.prompt();
    });
  }

  public writeLine(out: string): void {
    console.log(out);
  }
}

export default ReadLineREPL;
