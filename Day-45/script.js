console.log(
  "Day 45: " + new Date().toLocaleDateString("en-US", { weekday: "long" })
);

/* -----Transpose Matrix - 867----- */

/* let transpose = function (matrix) {
  let result = Array.from({ length: matrix[0].length }, () =>
    Array(matrix.length)
  );
  for (let i = 0; i < result.length; i++) {
    for (let j = 0; j < result[i].length; j++) {
      result[i][j] = matrix[j][i];
    }
  }
  return result;
}; */

/* let transpose = function (matrix) {
  let row = matrix.length;
  let col = matrix[0].length;
  let result = Array.from({ length: col }, () => Array(row));
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      result[j][i] = matrix[i][j];
    }
  }
  return result;
}

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(transpose(matrix)); // [[1,4,7],[2,5,8],[3,6,9]]

let matrix2 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
];
console.log(transpose(matrix2)); // [[1,5],[2,6],[3,7],[4,8]]
 */

/* -----Rotate Image 48----- */

/* let rotate = function (matrix) {
  matrix.reverse();
  let n = matrix.length;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
  return matrix;
};

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(rotate(matrix)); // [[7,4,1],[8,5,2],[9,6,3]] */

/* -----Spiral Matrix 54----- */

let spiralOrder = function (matrix) {
  let ans = [];
  let minRow = 0,
    maxRow = matrix.length - 1;
  let minCol = 0,
    maxCol = matrix[0].length - 1;
  let length = matrix.length * matrix[0].length;

  while (ans.length < length) {
    // Top wall
    for (let i = minCol; i <= maxCol && ans.length < length; i++) {
      ans.push(matrix[minRow][i]);
    }
    minRow++;

    // Right Wall
    for (let i = minRow; i <= maxRow && ans.length < length; i++) {
      ans.push(matrix[i][maxCol]);
    }
    maxCol--;

    // Bottom Wall
    for (let i = maxCol; i >= minCol && ans.length < length; i--) {
      ans.push(matrix[maxRow][i]);
    }
    maxRow--;

    // Left Wall
    for (let i = maxRow; i >= minRow && ans.length < length; i--) {
      ans.push(matrix[i][minCol]);
    }
    minCol++;
  }
  return ans;
};

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(spiralOrder(matrix)); // [1,2,3,6,9,8,7,4,5]

let matrix2 = [
  // 4 x 4
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];
console.log(spiralOrder(matrix2)); // [1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10]

let matrix3 = [
  // 5 x 5
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25],
];
console.log(spiralOrder(matrix3)); // [1,2,3,4,5,10,15,20,25,24,23,22,21,16,11,6,7,8,9,14,19,18,17,12,13]

let flipAndInvertImage = function (image) {
  for (let i = 0; i < image.length; i++) {
    image[i].reverse();
    for (let j = 0; j < image[i].length; j++) {
      if (image[i][j] === 0) {
        image[i][j] = 1;
      } else {
        image[i][j] = 0;
      }
    }
  }
};

let image = [
  [1, 1, 0],
  [1, 0, 1],
  [0, 0, 0],
];
flipAndInvertImage(image);
console.log(image);
