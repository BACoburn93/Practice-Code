const multiply = (x, y) => x * y;
//Is added to the stack third, which executes for the square function and is then removed

const square = (x) => multiply(x, x);
//Is added to the stack second, which calls for the 'multiply' function to run
//After multiply is run, it now has a value for square and it executes; removing it from the stack

const isRightTriangle = (a, b, c) => {
    return square(a) + square(b) === square(c);
};
//Is put on the stack first, which requires the 'square' function to execute
//After square has been determined, it now has a value for square(a) and is able to return that
//Now, it moves onto square(b), which reruns the square function for b onto the stack
//The steps repeat again for square(c)
//Now that all of the square functions have been called, isRightTriangle can be called and it's action becomes determined by the results

isRightTriangle(3, 4, 5);
