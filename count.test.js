//stringLength
const stringLength = require('./count');

it('string length',()=>{
    expect(stringLength('ikooterasu')).toBe(10);
});
it('string length greater',()=>{
    expect(stringLength('ikooterasu')).toBeGreaterThan(0);
});
it('string length less',()=>{
    expect(stringLength('ikooterasu')).toBeLessThan(11);
})

//reversestringth

const reverseString = require('./reverse');
it('reverse length',()=>{
    expect(reverseString('ikoote')).toMatch('etooki');
});

//calcultor describe
const calculator = require('./calculator');

//add

describe.each([
    [1,1,3],
    [4,2,7],
    [2,4,7]
])('.add(%i,%i)',(a,b, expected)=>{
it('return sum ${expected}',()=>{
    expect(calculator.add(a,b)).not.toBe(expected);
})
it('return greater ${expected}',()=>{
    expect(calculator.add(a,b)).not.toBeGreaterThan(expected);
})
it('return less or equal ${expected}',()=>{
    expect(calculator.add(a,b)).toBeLessThanOrEqual(expected);
})
});

//divide
describe.each([
    [20,2,6],
    [54,3,5],
    [30,4,4]
])('.divide(%i,%i)',(a,b, expected)=>{
it('return divide ${expected}',()=>{
    expect(calculator.divide(a,b)).not.toBe(expected);
})
it('return greater ${expected}',()=>{
    expect(calculator.divide(a,b)).toBeGreaterThan(expected);
})
it('return less or equal ${expected}',()=>{
    expect(calculator.divide(a,b)).not.toBeLessThanOrEqual(expected);
})
});

//subtract
describe.each([
    [8,2,6],
    [8,3,5],
    [8,4,4]
])('.subtract(%i,%i)',(a,b, expected)=>{
it('return subtract ${expected}',()=>{
    expect(calculator.subtract(a,b)).toBe(expected);
})
it('return greater ${expected}',()=>{
    expect(calculator.subtract(a,b)).not.toBeGreaterThan(expected);
})
it('return less or equal ${expected}',()=>{
    expect(calculator.subtract(a,b)).toBeLessThanOrEqual(expected);
})
});

//multiply
describe.each([
    [4,2,8],
    [5,3,15],
    [7,2,14]
])('.multiply(%i,%i)',(a,b, expected)=>{
it('return multiply ${expected}',()=>{
    expect(calculator.multiply(a,b)).toBe(expected);
})
it('return greater ${expected}',()=>{
    expect(calculator.multiply(a,b)).not.toBeGreaterThan(expected);
})
it('return less or equal ${expected}',()=>{
    expect(calculator.multiply(a,b)).toBeLessThanOrEqual(expected);
})
});



//using TDD
const capitalize = require('./capitalize');
test('using tdd',()=>{
    expect(capitalize('preim')).toMatch('Preim');
});