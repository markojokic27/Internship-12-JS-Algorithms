class Fruit{
  constructor(name,color,isForSale){
    this.name=name;
    this.color=color;
    this.isForSale=isForSale
  }
}
let fruits = [
  new Fruit('banana', 'yellow', false),
  new Fruit('apple', 'green', false),
  new Fruit('orange', 'orange', false),
  new Fruit('peach','peach',false)
 ];
let fruitsX=fruits.filter((fruit)=>{
  if(fruit.color===fruit.name)
    return fruit;
});
console.log("Fruits with same name and color:");
fruitsX.forEach(element => {
  console.log(`${element.name}`);
});