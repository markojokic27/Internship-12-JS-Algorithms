let input = prompt('Input string: ')
let inputX = input.split(' ')
let csv = inputX.reduce((a,b) => {
  return a + ',' + b},'');
console.log(csv.slice(1));