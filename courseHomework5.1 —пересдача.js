//Задача №1

function generateArray() {
	let ArrayOneLength = 3;
	let ArrayOne = [];
	ArrayOne = new Array(ArrayOneLength);
	for (k = 0; k < ArrayOne.length; k++) {
		ArrayOne[k] = Math.floor((Math.random() * 15));
	}
	console.log(ArrayOne);
	return ArrayOne;
}

function sum(x) {
	let sumOne = 0;
	for (i = 0; i < x.length; i++) {
		sumOne += x[i];
	}
	return sumOne
}

function mainSum(a, b) {

	if (sum(a) > sum(b)) {
		return a
	}
	return b

}
console.log(mainSum(generateArray(), generateArray()));