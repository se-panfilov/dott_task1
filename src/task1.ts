// Task 1
// Write function addN with the following behaviour:
// const addEight = addN(8);
// addEight(7); // resolves to 15
// addEight(100); // 108

export function addN(a: number): AddNumberFunction {
  if (!isFinite(a)) throw new Error(`Can't add anything to the Infinity`);
  if (isNaN(a)) throw new Error(`Not a valid number provided`);

  return (b: number) => a + b;
}

export type AddNumberFunction = (num: number) => number


// Run 'npm test' to check is it works
