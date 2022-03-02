const matrix = [[1, 2, 0], [4, 5, 6], [7, 8, 9]]

const arr=[]
const arr2=[]
for(i=0; i<matrix.length;i++){
  arr.push(matrix[i][i])
  arr2.push(matrix[i][matrix.length-i-1])
}
const total1 = arr.reduce((a, b) => a + b);
const total2 = arr2.reduce((a, b) => a + b);
console.log(total1-total2);
