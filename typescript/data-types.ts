let variable = "foo";  // this is a string

let foo = variable + 12;
foo = foo + " this is twelve and ";
foo = foo + 0;
console.log(foo);

function addATrueNumber(x: number, y: number) {
	return x + y;
}

const aTrueNumber = addATrueNumber(12, 12);
console.log(aTrueNumber);