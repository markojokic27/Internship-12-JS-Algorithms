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
 let indexes=[];
 console.log("All fruits:");
 /*
 fruits.forEach(element => {
  if(element.isForSale===false)
    indexes.push(fruits.indexOf(element.name));
  console.log(`${element.name}`);
 }); ne radi?*/
 for(let i=0;i<fruits.length;i++){
  if(fruits[i].isForSale===false)
    indexes.push(i);
  console.log(`${fruits[i].name}`);
 }
 if(indexes.length>0){
  console.log("Indexes of fruits which is not ready for sale: ");
  indexes.forEach(element => {
    console.log(element);
   });
 }
 fruits=fruits.filter((fruit)=>{
  if(fruit.isForSale===true) return fruit;
 })
 console.log("All fruits you can buy:");
 fruits.forEach(element => {
  console.log(`${element.name}`);
 });
