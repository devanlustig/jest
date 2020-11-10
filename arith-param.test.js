
const { add, mul, sub, div } = require('./arith');

test.each([[1, 1, 2], [-1, 2, 1], [2, 1, 3]])(
    '%i + %i equals %i', (a, b, expected) => {
        expect(add(a, b)).toBe(expected);
    },
);

test.each([[1, 1, 0], [-1, 2, -3], [2, 1, 1]])(
    '%i - %i equals %i', (a, b, expected) => {
        expect(sub(a, b)).toBe(expected);
    },
);

test.each([[1, 1, 1], [-1, 2, -2], [2, 1, 2]])(
    '%i * %i equals %i', (a, b, expected) => {
        expect(mul(a, b)).toBe(expected);
    },
);

test.each([[1, 1, 1], [-1, 2, -0.5], [2, 1, 2]])(
    '%i / %i equals %i', (a, b, expected) => {
        expect(div(a, b)).toBe(expected);
    },
);
