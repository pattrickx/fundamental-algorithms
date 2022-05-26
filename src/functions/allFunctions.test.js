const allFunction = require('./allFunctions');

// Sum
test('sunFunc 10+20 = 30', () => {
    expect(allFunction.sunFunc(10,20)).toBe(30);
});

test('sunFunc -10+20 = 30', () => {
    expect(allFunction.sunFunc(-10,20)).toBe(10);
});

// primeFunc
test('primeFunc 10 = false', () => {
    expect(allFunction.primeFunc(10)).toBe(false);
});

test('primeFunc 3 = true', () => {
    expect(allFunction.primeFunc(3)).toBe(true);
});

// contFunc
test('contFunc 10 = true', () => {
    expect(allFunction.contFunc(10)).toBe(true);
});

test('contFunc 3 = false', () => {
    expect(allFunction.contFunc(3)).toBe(false);
});

//fibonacciFunc
test('fibonacciFunc 5 = 0, 1, 1, 2, 3', () => {
    expect(allFunction.fibonacciFunc(5)).toBe('0, 1, 1, 2, 3');
});

test('fibonacciFunc 1 = 0', () => {
    expect(allFunction.fibonacciFunc(1)).toBe('0');
});

//mdcFunc
test('mdcFunc 5 10 = 5', () => {
    expect(allFunction.mdcFunc([5,10,20])).toBe(5);
});

test('mdcFunc 1 = 1', () => {
    expect(allFunction.mdcFunc([1])).toBe(1);
});
//quicksortFunc

test('quicksortFunc 5,4,3,1 = 1,3,4,5', () => {
    expect(allFunction.quicksortFunc([5,4,3,1]).toString()).toBe([1,3,4,5].toString());
});

test('quicksortFunc 100,4,3,150 = 3,4,100,150', () => {
    expect(allFunction.quicksortFunc([100,4,3,150]).toString()).toBe([3,4,100,150].toString());
});