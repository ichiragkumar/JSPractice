// Step 1: Create an array of products
const products = [
  { id: 1, name: "Laptop", price: 999, category: "Electronics" },
  { id: 2, name: "Smartphone", price: 699, category: "Electronics" },
  { id: 3, name: "Tablet", price: 499, category: "Electronics" },
  { id: 4, name: "Smartwatch", price: 199, category: "Electronics" },
  { id: 5, name: "Headphones", price: 149, category: "Electronics" },
  { id: 6, name: "Monitor", price: 299, category: "Electronics" },
  { id: 7, name: "Keyboard", price: 99, category: "Accessories" },
  { id: 8, name: "Mouse", price: 49, category: "Accessories" },
  { id: 9, name: "Printer", price: 129, category: "Electronics" },
  { id: 10, name: "Desk", price: 199, category: "Furniture" },
  { id: 11, name: "Chair", price: 89, category: "Furniture" },
  { id: 12, name: "Bookshelf", price: 149, category: "Furniture" },
  { id: 13, name: "Game Console", price: 499, category: "Gaming" },
  { id: 14, name: "Video Game", price: 59, category: "Gaming" },
  { id: 15, name: "Action Figure", price: 24, category: "Toys" },
  { id: 16, name: "Board Game", price: 34, category: "Toys" },
  { id: 17, name: "LED Lamp", price: 19, category: "Home" },
  { id: 18, name: "Wall Art", price: 59, category: "Home" },
  { id: 19, name: "Coffee Maker", price: 89, category: "Kitchen" },
  { id: 20, name: "Blender", price: 39, category: "Kitchen" },
  { id: 21, name: "Air Fryer", price: 99, category: "Kitchen" },
  { id: 22, name: "Microwave", price: 129, category: "Kitchen" },
];

// how to access a single product
const productID = 3;
const product = products.find((EachITem) => EachITem.id === productID);
console.log(product);

// iterating over the array items

// products.forEach((EachITem) => {
//   setInterval(() => {
//     console.log(EachITem);
//   }, 1000);
// });

const checkID = 5;
const isChekdIDExist = products.some((EachITem) => EachITem.id === checkID);
console.log(isChekdIDExist);
