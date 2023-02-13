class Fruit{
  constructor(name,colors,isForSale){
    this.name=name;
    this.colors=colors;
    this.isForSale=isForSale
  }
}
let fruits = [
  new Fruit('banana', ['yellow'], false),
  new Fruit('apple', ['green', 'yellow'], false),
  new Fruit('orange', ['orange'], false),
  new Fruit('kiwi', ['brown', 'green'], false),
  new Fruit('watermelon', ['green', 'red'], false),
];
let fruitsX=[];
fruits.forEach(element => {
  if(element.colors.includes("yellow"))
    fruitsX.push(element);
});
fruitsX.forEach(element => {
  console.log(`${element.name} ${element.colors}`);
 });