class Matrix {
  //Declare properties
  private _rowsNumber: number;
  private _columnsNumber: number;
  private _elements: number[][];

  constructor(
    rowsNumber: number,
    columnsNumber: number,
    elements?: number[][]
  ) {
    this._rowsNumber = rowsNumber;
    this._columnsNumber = columnsNumber;
    //For the elements need to call another method to start the matrix with 0
    this._elements = this.MatrixStart();
  }

  //Getter section
  get rowsNumber() {
    return this._rowsNumber;
  }

  get columnsNumber() {
    return this._columnsNumber;
  }

  get elements() {
    return this._elements;
  }

  //This method will create a 2D array for the matrix values
  protected MatrixStart() {
    this._elements = [];
    for (let i = 0; i < this._rowsNumber; i++) {
      //Create the rows
      this._elements[i] = [];
      for (let j = 0; j < this._columnsNumber; j++) {
        //Create the columns and set all the values to 0
        this._elements[i][j] = 0;
      }
    }
    //Return 2d array with 0 values
    return this._elements;
  }

  //The user will use this method to set the values in the matrix according to i and j position
  protected fillMatrix(i: number, j: number, value: number) {
    if (i > this._rowsNumber - 1 || j > this._columnsNumber - 1) {
      // //If the user put a position that doesnt exist, send an Error message to the console
      console.log("Error, you set a position that it doesnt exist");
    } else {
      //If the position is correct, set the value
      this._elements[i][j] = value;
    }
  }

  //Will use this method for add 2 matrix
  static sumMatrix(m1Elements: number[][], m2Elements: number[][]): number[][] {
    //Create variables to storage the row and column length of the matrix1 and matrix2. Will use these variable for the for loops
    let row_m1 = m1Elements.length;
    let col_m1 = m1Elements[0].length;
    let row_m2 = m2Elements.length;
    let col_m2 = m2Elements[0].length;

    //Stablish the matrix add condition. If the matrix1 and matrix2 dont have the same length send an error to the console
    if (row_m1 != row_m2 || col_m1 != col_m2) {
      console.log("NOOP both matrix need to have the same length");
    }
    //Create a new variable to storage the sum result
    let result: number[][] = [];
    for (let i = 0; i < row_m1; i++) {
      result[i] = [];
      for (let j = 0; j < col_m1; j++) {
        //Sum the values of each position
        result[i][j] = m1Elements[i][j] + m2Elements[i][j];
      }
    }
    //Return the resul matrix
    return result;
  }

  //Will use this method for multiply 2 matrix
  static multiplyMatrix(
    m1Elements: number[][],
    m2Elements: number[][]
  ): number[][] {
    //Create variables to storage the row and column length of the matrix1 and matrix2. Will use these variable for the for loops
    let row_m1 = m1Elements.length;
    let col_m1 = m1Elements[0].length;
    let row_m2 = m2Elements.length;
    let col_m2 = m2Elements[0].length;
    //Stablish the matrix multiply condition. If the row length in matrix 2 is different to the column length in matrix 1 send an error to the console.
    if (row_m2 !== col_m1) {
      console.log(
        "NOOP Number of columns in the first matrix needs to be the same as the number of rows in the second"
      );
    }
    //Start a new array of rows
    let result = new Array(row_m1);
    for (let i = 0; i < result.length; i++) {
      //start a new array of columns
      result[i] = new Array(col_m2).fill(0);
    }
    //Iterate the new matrix to set the new values
    for (let i = 0; i < result.length; i++) {
      for (let j = 0; j < result[i].length; j++) {
        //Create a new variable to storage the result of the sums
        let sum = 0;
        //Iterate matrix1 and matrix2
        for (let k = 0; k < col_m1; k++) {
          //Do operations
          sum += m1Elements[i][k] * m2Elements[k][j];
        }
        //Set the values in each position
        result[i][j] = sum;
      }
    }
    //return the result matrix
    return result;
  }
}

//Create a child class from father class Matrix
class MatrixNew extends Matrix {
  constructor(rows: number, columns: number, elements?: number[][]) {
    super(rows, columns, elements);
  }

  MatrixStart(): number[][] {
    return super.MatrixStart();
  }

  fillMatrix(i: number, j: number, value: number) {
    return super.fillMatrix(i, j, value);
  }
}

// Data Test
const matrix1 = new MatrixNew(2, 2);
matrix1.fillMatrix(0, 0, 1);
matrix1.fillMatrix(0, 1, 2);
matrix1.fillMatrix(1, 0, 3);
matrix1.fillMatrix(1, 1, 4);

const matrix2 = new MatrixNew(2, 2);
matrix2.fillMatrix(0, 0, 5);
matrix2.fillMatrix(0, 1, 6);
matrix2.fillMatrix(1, 0, 7);
matrix2.fillMatrix(1, 1, 8);

console.table(matrix1.elements);
console.table(matrix2.elements);

console.table(Matrix.sumMatrix(matrix1.elements, matrix2.elements));
console.table(Matrix.multiplyMatrix(matrix1.elements, matrix2.elements));
