import * as readline from 'readline';

export default class Keyboard {
  private input; 

  public constructor () {
    this.input = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
  }

  public read() :Promise<string> {
    return new Promise<string>(resolve => {
      this.input.on('line', (answer: string) => {
        this.input.close();

        resolve(answer);
      });
    })
  }
}