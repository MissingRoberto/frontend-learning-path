import { expect, test } from '@jest/globals';
import { sum } from './sum.js';

test('sum adds two numbers', () => {
  expect(sum(2, 3)).toBe(5);
});
