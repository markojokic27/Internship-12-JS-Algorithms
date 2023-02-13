class Fruit{
  constructor(name,color,isForSale){
    this.name=name;
    this.color=color;
    this.isForSale=isForSale
  }
}
let fruits = [
  new Fruit('banana', 'yellow', true),
  new Fruit('apple', 'green', false),
  new Fruit('orange', 'orange', true),
  new Fruit('peach','peach',false)
 ]; 
 console.log("All fruits in alphabetical order:");
 /*fruits.sort(); ->ne radi?*/
 const sortedFruits = fruits.sort((a, b) => {
  if (a.name < b.name){
    return -1;
  }
  return 1;
})
sortedFruits.forEach(element => {
  console.log(`${element.name}`);
 });
