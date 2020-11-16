const readline = require('readline');

export default class Keyboard {
  private input :any

  public constructor () {
    this.input = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
  }

  public read() {
    return new Promise<string>(resolve => {
      this.input.on('line', (answer: string) => {
        this.input.close();

        resolve(answer);
      });
    })
  }
}