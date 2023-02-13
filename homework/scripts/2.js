class Person {
  constructor(name, surname, eyeColor, hairColor, height) {
    this.name = name;
    this.surname = surname;
    this.eyeColor=eyeColor;
    this.hairColor=hairColor;
    this.height = height;
  }
}
let persons = [];
let number=0;
let check=false;
do {
  number=prompt(`Enter number of persons.`);
  if (isNaN(number)) alert(`invalid number`);
  else if(number<=0) alert(`number must be higher than 0`)
  else check=true;
} while (!check);
for(let i=0;i<number;i++){
  let name = prompt(`Person ${i+1}\nName: `);
  let surname = prompt(`Person ${i+1}\nSurname: `);
  let eyeColor = prompt(`Person ${i+1}\nEye color: `);
  let hairColor = prompt(`Person ${i+1}\nHair color: `);
  let height = +prompt(`Person ${i+1}\nHeight: `);
  persons.push(new Person(name, surname,eyeColor,hairColor, height));
}
persons.sort((a,b)=>{
return a.height - b.height
});
const half = Math.ceil(persons.length / 2);
const tallPersons=persons.slice(half);
tallPersons.forEach(element => {
  console.log(`${element.name} ${element.surname}`)
});