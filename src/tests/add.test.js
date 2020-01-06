const ADD = (a, b) => a + b;
const SUBTRACT = (a, b) => a - b;

test('add two numbers', () => {
    const RESULT = ADD(5, 3);
    expect(RESULT).toBe(8);
});

test('subtract two numbers', () => {
    const RESULT = SUBTRACT(5, 3);
    expect(RESULT).toBe(3);
});