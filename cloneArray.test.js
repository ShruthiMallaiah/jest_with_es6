import cloneArray from "./clonedArray";

test('Clones an array', ()=> {
    let array = [1,2,3];
    expect(cloneArray(array)).toEqual(array)
})