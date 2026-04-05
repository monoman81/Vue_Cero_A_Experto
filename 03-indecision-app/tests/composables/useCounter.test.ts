import {describe, test, expect} from "vitest";
import {useCounter} from "@/composables/useCounter.ts";

describe('useCounter', () => {

  test('initialize counter with default value', () => {
    const {counter, square} = useCounter();
    expect(counter.value).toBe(5);
    expect(square.value).toBe(25);
  });

  test('initialize counter with provided value', () => {
    const initialValue = 10;
    const {counter, square} = useCounter(initialValue);
    expect(counter.value).toBe(initialValue);
    expect(square.value).toBe(initialValue * initialValue);
  });

  test('increments counter correctly', () => {
    const {counter, square} = useCounter();
    counter.value = counter.value.valueOf() + 1;
    expect(counter.value).toBe(6);
    expect(square.value).toBe(36);
  });

});
