const { add, mul, sub, div} = require('./arith');

test('2 + 3 = 5', () => {
    expect(add(2, 3)).toBe(5);
});

test('3 * 5 = 15', () => {
    expect(mul(3, 5)).toBe(15);
});

test('2 - 3 = -1', () => {
    expect(sub(2, 3)).toBe(-1);
});

test('6 / 3 = 2', () => {
    expect(div(6, 3)).toBe(2);
});