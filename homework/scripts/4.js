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
 console.log("Old fruits: ");
 fruits.forEach(element => {
  console.log(`${element.name} ${element.colors}`);
 });
 for (let i=0; i<fruits.length; i++){
    if(fruits[i].colors.includes('yellow')){
      fruits[i].colors.splice(fruits[i].colors.indexOf('yellow'), 1, 'red')
    }
 }
 console.log("New fruits: ");
 fruits.forEach(element => {
  console.log(`${element.name} ${element.colors}`);
 });