class Person {
  constructor(name, surname, height) {
    this.name = name;
    this.surname = surname;
    this.height = height;
  }
}
let persons = [];
do {
  let name = prompt("Name: ");
  let surname = prompt("Surname: ");
  let height = +prompt("Height: ");
  if (isNaN(height)) alert("invalid height");
  else persons.push(new Person(name, surname, height));
} while (!confirm("End of input?"));
let average = 0;
persons.forEach((element) => {
  average += element.height;
});
average /= persons.length;
let personX = persons[0];
persons.forEach((element) => {
  if (Math.abs(average - element.height) > Math.abs(average - personX.height)) {
    personX = element;
  }
});
console.log(
  `${personX.name} ${personX.surname} visok(a) ${
    personX.height
  } najvise odskace od prosjecne visine ${average.toFixed(2)}`
);
