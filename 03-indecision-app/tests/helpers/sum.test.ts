import {describe, expect, test} from "vitest";
import {addArray, sum} from "../../src/helpers/sum";

describe('add function', () => {

  test('add 1 + 2 to equal 3', () => {
    //Arrange
    const a = 1;
    const b = 2;

    //Act
    const result = sum(a, b);

    //Assert
    expect(result).toBe(3);
    // if (sum(1, 2) !== 3) {
    //   throw new Error('La suma no es correcta');
    // }
  });

});

describe('add array function', () => {

  test('add array [1, 2, 3, 4, 5] to equal 15', () => {
    //Arrange
    const arr = [1, 2, 3, 4, 5];
    //Act
    const result = addArray(arr);
    //Assert
    expect(result).toBe(15);
  });

  test('add empty array equals to 0', () => {
    //Arrange
    const arr = [];
    //Act
    const result = addArray(arr);
    //Assert
    expect(result).toBe(0);
  });

});
