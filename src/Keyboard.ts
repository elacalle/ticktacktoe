import * as readline from 'readline';

export default class Keyboard {
  private input; 

  public constructor () {
    this.input = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
  }

  public read(prompt = '') :Promise<string> {
    return new Promise<string>(resolve => {
      this.input.question(prompt, (answer: string) => {
        this.input.close();

        resolve(answer);
      });
    });
  }
}