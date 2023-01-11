const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

propName = 'name';
  // Change code below this line
  const keyValue = [];
  
  for (const product of products) {     
    keyValue.push(product[propName]); 
    console.log(keyValue);
}
console.log(product);
  console.log(keyValue);
  // Change code above this line


// getAllPropValues("name");

