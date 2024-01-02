import { sum } from "../sum";

test("Sum function should caculate the sum of two number", () => {
  const result = sum(2, 4);
  // Assertion
  expect(result).toBe(6);
});
