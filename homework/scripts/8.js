/*let a=[];
let sum=0;
for(let i=1;i<101;i++){
  a.push(i);
  sum+=i;
}
console.log(sum)*/

let a= Array.from({length: 100}, (_, i) => i + 1)
let result = a.reduce((x, y) => {return x + y;});
console.log(result);