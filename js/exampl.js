function createArrayOfNumbers(min, max) {
  const numbers = [];
  // Change code below this line
  let member = min;
  
  for (let i = 0; i <= max - min; i += 1) {
    numbers = numbers.push(member);
    member += 1;
  }
  // Change code above this line
  return numbers;
}

console.log(createArrayOfNumbers(3, 7));
