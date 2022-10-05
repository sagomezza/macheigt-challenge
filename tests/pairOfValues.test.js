const { pairOfValues } = require('../src/pairOfValues.js');

test(`
    Input list: 1,9,5,0,20,-4,12,16,7
    Input sum: 12
    Output pairs:
    5, 7
    0, 12
    -4, 16
    `, () => {
    expect(
        pairOfValues(
            "1,9,5,0,20,-4,12,16,7",
            "12"
        )).toBe(`5, 7${"\n"}0, 12${"\n"}-4, 16${"\n"}`);
});

test(`
    Input list: 2,7,5,1,a
    Input sum: 7
    Output pairs:
    Filtered strings from the list!
    2, 5
    `, () => {
    expect(
        pairOfValues(
            "2,7,5,1,a",
            "7"
        )).toBe(`Filtered strings from the list! ${"\n"}2, 5${"\n"}`);
});


test(`
    Input list: a,b,c,d,e,f
    Input sum: 9
    Output pairs:
    The list is not made by numbers separated by comma, check it and try again!
    `, () => {
    expect(
        pairOfValues(
            "a,b,c,d,e,f",
            "9"
        )).toBe(`The list is not made by numbers separated by comma, check it and try again!`);
});

test(`
    Input list: 2,7,5,1,a
    Input sum: b
    Output pairs:
    Your target sum is not a number, check it and try again!
    `, () => {
    expect(
        pairOfValues(
            "2,7,5,1,a",
            "b"
        )).toBe(`Your target sum is not a number, check it and try again!`);
});

test(`
    Input list: 1,9,5,0,20,-4,12,16,7
    Input sum: b
    Output pairs:
    Your target sum is not a number, check it and try again!
    `, () => {
    expect(
        pairOfValues(
            "1,9,5,0,20,-4,12,16,7",
            "z"
        )).toBe(`Your target sum is not a number, check it and try again!`);
});

test(`
    Input list: 2,2,2,2
    Input sum: 4
    Output pairs:
    2, 2
    2, 2
    `, () => {
    expect(
        pairOfValues(
            "2,2,2,2",
            "4"
        )).toBe(`2, 2${"\n"}2, 2${"\n"}`);
});

test(`
    Input list: 2,2,2,2,2
    Input sum: 4
    Output pairs:
    2, 2
    2, 2
    `, () => {
    expect(
        pairOfValues(
            "2,2,2,2,2",
            "4"
        )).toBe(`2, 2${"\n"}2, 2${"\n"}`);
});

test(`
    Input list: 8,98,152,67,34789,200,4766237,1,252,5,3,204,90,76,24,65,0,404,380
    Input sum: 404
    Output pairs:
    152, 252
    200, 204
    24,380
    0, 404
    `, () => {
    expect(
        pairOfValues(
            "8,98,152,67,34789,200,4766237,1,252,5,3,204,90,76,24,65,0,404,380",
            "404"
        )).toBe(`152, 252${"\n"}200, 204${"\n"}24, 380${"\n"}0, 404${"\n"}`);
});
