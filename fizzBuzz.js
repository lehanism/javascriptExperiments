//Print 1 to 100. For numbers divisible by 3, print "Fizz", instead of number, and for numbers divisible by 5 (and not 3), print 'Buzz' instead.

var number = 1;

while (number <= 100) {
	if (number % 3 == 0 && number % 5 != 0) {
		console.log("Fizz")
	} else if (number % 5 == 0 && number % 3 != 0) {
		console.log("Buzz")

	} else if (number % 3 == 0 && number % 5 ==0) {

		console.log("FizzBuzz")

	} else {

		console.log(number);
	}

	number++;
}