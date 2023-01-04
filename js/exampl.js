let array = [1, 2, 3, 4, 5];
let newMas = [];
newMas[0] = array[0];
newMas[1] = array[array.length - 1];
array = newMas;
  
console.log(array);
// console.log(lastElement);