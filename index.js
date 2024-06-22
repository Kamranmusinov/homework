// let arr = ['Ramiz', 'Jahongir', 'Kamran', 'Amin'];

// let longestName = ''

// arr.filter(name=>) {
//     if(name.length > longestName.length) {
//         longestName = name
//     }
    
// }

// console.log(longestName);




const market = [
    { name: "Молоко", price: 2.5, expDate: "2023-12-25" }, 
    { name: "Яблоки", price: 1.8, expDate: "2024-02-15" },
    { name: "Пиво", price: 3.0, expDate: "2024-01-10" },
    { name: "Йогурт", price: 2.0, expDate: "2023-11-10" }
  ];
  
  let totalPrice = 0;
  for (let i = 0; i < market.length; i++) {
    totalPrice += market[i].price;
  }
  

  let averagePrice = totalPrice / market.length;
  
  let expiredProducts = [];
  for (let i = 0; i < market.length; i++) {
    const expDate = new Date(market[i].expDate); 
    if (expDate < new Date("2024-01-01")) {
      expiredProducts.push(market[i].name + " - просрочен");
    }
  }
  
  console.log("Средняя цена:", averagePrice);
  console.log("Просроченные продукты:", expiredProducts); 