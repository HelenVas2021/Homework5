//Задача №1
const ArrayOneLength = 10;
const ArrayTwolength = 10;
let ArrayOne = [];
let ArrayTwo = [];
ArrayOne = new Array(ArrayOneLength);
ArrayTwo = new Array(ArrayTwolength);

for (k = 0; k < ArrayOne.length; k++) {
	ArrayOne[k] = Math.floor((Math.random() * 15));
}

for (c = 0; c < ArrayTwo.length; c++) {
	ArrayTwo[c] = Math.floor((Math.random() * 15));
}
console.log(ArrayOne, ArrayTwo);


function mainsum(a, b) {

	function sum(x) {
		let sumOne = 0;
		for (i = 0; i < x.length; i++) {
			sumOne += x[i];
		}
		return sumOne
	}

	if (sum(a) > sum(b)) {
		return a
	}
	return b

}

console.log(mainsum(ArrayOne, ArrayTwo));

