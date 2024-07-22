// sum.test.js
import { describe, expect, test } from 'vitest';
import { addArray, sum } from '../../src/helpers/sum';

describe('add function', () => {
  test('adds 1 + 2 to equal 3', () => {
    // !!!: preparación
    const a = 1;
    const b = 4;
    // !!!: Estimulo
    const result = sum(a, b);
    // !!!: comportamiento esperado
    expect(result).toBe(a + b);
    // expect(sum(1, 2)).toBe(3);
    // if (sum(1, 2) !== 3) {
    //   throw new Error('La suma no es correcta');
    // }
  });
});

describe('addArray function', () => {
  test('Shold return 0 if the array is empty', () => {
    // !!!: preparación
    const array = [1, 2];
    // !!!: estimulo
    const result = addArray(array);

    expect(result).toBe(3);
  });
});
