const x = [1, 2]; // an array
const y = {
  key: "pair",
  date: new Date(),
  generateDate() {
    this.date = new Date();
  },
}; // a key-value pair or a dictionary or object

console.log(x, typeof x);
console.log(y, typeof y);
y.generateDate();
console.log(y);

type Person = {
	age: number,
	name: {
		first: string,
		last: string,
		updateFirstName: Function
	}
}

let person = {
    age: 20,
    name: {
      first: "John",
      last: "River",
      updateFirstName: function (x: string) {
          this.first = x
      }
    }
}
console.log(person);
person.name.updateFirstName("Jonathan");
console.log(person);
console.log(typeof person)
