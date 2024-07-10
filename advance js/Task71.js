const shoppingCart = [
  { id: 1, name: "Laptop", price: 800, quantity: 2 },
  { id: 2, name: "Smartphone", price: 500, quantity: 1 },
  { id: 3, name: "Tablet", price: 300, quantity: 3 },
  { id: 4, name: "Headphones", price: 50, quantity: 2 },
];

const costOfEachItem = (myArray) =>{
   const total =  myArray.map((Element) =>{
        return(
            `${Element.name} : ${Element.quantity * Element.price}`
        )
    })

    return total;
}

const filterProduct = (myArray) => {
    const products = myArray.filter((element) => {
      return element.price > 1000;
    });
    return products.map(product => product.name);
  };

const overallCost = (myArray) =>{
    let totalOfEach = myArray.map((Element) =>{
        return(
            Element.name , Element.quantity * Element.price
        )
    })

    let total = totalOfEach.reduce((a , b) =>{
        return a + b;
    })

    return total
}

const sortByQuantity = (myArray) =>{
    const sorted = myArray.sort((a , b) =>{
        return b.quantity - a.quantity;
    })

    return sorted.map((Element => `${Element.name} : ${Element.quantity}`))
}


console.log(`The total price of each item is`);
console.log(costOfEachItem(shoppingCart));
console.log("==========");
console.log(`Products who are greater than 1000 are`)
console.log(filterProduct(shoppingCart));
console.log("==========");
console.log(`The overall price of all the products is ${overallCost(shoppingCart)}`)
console.log("==========");
console.log("Products according to sorted are");
console.log(sortByQuantity(shoppingCart));