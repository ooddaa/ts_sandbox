// https://mariusschulz.com/blog/the-unknown-type-in-typescript

/* is there tsconfig.ts option to have unknown assigned by default instead of any? */

/**
 * A custom type guard function that determines whether
 * `value` is an array that only contains numbers.
 */
export function isNumberArray(value: unknown): value is number[] {
  return (
    Array.isArray(value) &&
    value.every((element) => typeof element === "number")
  );
}

const unknownValue: unknown = [15, 23, 8, 4, 42, 16];

if (isNumberArray(unknownValue)) {
  // Within this branch, `unknownValue` has type `number[]`,
  // so we can spread the numbers as arguments to `Math.max`
  const max = Math.max(...unknownValue);
  console.log(max);
}

interface Lol {
  keyA: "lol";
}

/* custom type checking function */
export function isLol(value: unknown): value is Lol {
  if (
    typeof value === "object" &&
    value !== null &&
    Object.prototype.hasOwnProperty.call(value, "keyA")
  ) {
    /* now check value.keyA type, simple value['keyA'] === "lol" won't work, 
    ts still thinks property 'keyA' does not exist on object */
    const entries: [string, any][] = Object.entries(value);

    /* it must contain only [['keyA', 'lol']] */
    if (
      entries.length === 1 &&
      entries[0][0] === "keyA" &&
      entries[0][1] === "lol"
    ) {
      return true;
    }
  }
  return false;
}

/* all good */
console.log(
  isLol({ keyA: "lol" }), // true
  isLol({ keyA: "notLol" }), // false
  isLol({ keyB: "lol" }) // false
);
