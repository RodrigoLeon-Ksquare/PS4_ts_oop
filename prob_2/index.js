"use strict";
class Matrix {
    constructor(rowsNumber, columnsNumber, elements) {
        this._rowsNumber = rowsNumber;
        this._columnsNumber = columnsNumber;
        this._elements = this.MatrixStart();
    }
    get rowsNumber() {
        return this._rowsNumber;
    }
    get columnsNumber() {
        return this._columnsNumber;
    }
    get elements() {
        return this._elements;
    }
    MatrixStart() {
        this._elements = [];
        for (let i = 0; i < this._rowsNumber; i++) {
            this._elements[i] = [];
            for (let j = 0; j < this._columnsNumber; j++) {
                this._elements[i][j] = 0;
            }
        }
        return this._elements;
    }
    fillMatrix(i, j, value) {
        if (i > this._rowsNumber - 1 || j > this._columnsNumber - 1) {
            console.log("Error, you set a position that it doesnt exist");
        }
        else {
            this._elements[i][j] = value;
        }
    }
    static sumMatrix(m1Elements, m2Elements) {
        let row_m1 = m1Elements.length;
        let col_m1 = m1Elements[0].length;
        let row_m2 = m2Elements.length;
        let col_m2 = m2Elements[0].length;
        if (row_m1 != row_m2 || col_m1 != col_m2) {
            console.log("NOOP both matrix need to have the same length");
        }
        let result = [];
        for (let i = 0; i < row_m1; i++) {
            result[i] = [];
            for (let j = 0; j < col_m1; j++) {
                result[i][j] = m1Elements[i][j] + m2Elements[i][j];
            }
        }
        return result;
    }
    static multiplyMatrix(m1Elements, m2Elements) {
        let row_m1 = m1Elements.length;
        let col_m1 = m1Elements[0].length;
        let row_m2 = m2Elements.length;
        let col_m2 = m2Elements[0].length;
        if (row_m2 !== col_m1) {
            console.log("NOOP Number of columns in the first matrix needs to be the same as the number of rows in the second");
        }
        let result = new Array(row_m1);
        for (let i = 0; i < result.length; i++) {
            result[i] = new Array(col_m2).fill(0);
        }
        for (let i = 0; i < result.length; i++) {
            for (let j = 0; j < result[i].length; j++) {
                let sum = 0;
                for (let k = 0; k < col_m1; k++) {
                    sum += m1Elements[i][k] * m2Elements[k][j];
                }
                result[i][j] = sum;
            }
        }
        return result;
    }
}
class MatrixNew extends Matrix {
    constructor(rows, columns, elements) {
        super(rows, columns, elements);
    }
    MatrixStart() {
        return super.MatrixStart();
    }
    fillMatrix(i, j, value) {
        return super.fillMatrix(i, j, value);
    }
}
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
