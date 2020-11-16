export default class Board {
  private sections: any[];

  public constructor() {
    this.setupBoard();
  }

  setupBoard() :void {
    this.setupColumns();
    this.setupRows();
  }

  setupColumns() :void {
    this.sections = Object.seal(new Array(3));
  }

  setupRows() :void {
    this.sections.forEach((row: any[]) => {
      row = Object.seal(new Array(3));  
    });
  }
}