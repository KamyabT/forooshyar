import { describe, it, expect } from "vitest";
import { calculateTotal } from "./calculateTotal";

describe("calculateTotal", () => {
  it("calculates 100 * 3", () => {
    expect(calculateTotal(100, 3)).toBe(300);
  });

  it("calculates 50 * 2", () => {
    expect(calculateTotal(50, 2)).toBe(100);
  });

  it.each([
    [100, 3, 300],
    [50, 2, 100],
    [100, 0, 0],
    [0, 5, 0],
  ])("calculates %i * %i = %i", (price, quantity, expected) => {
    expect(calculateTotal(price, quantity)).toBe(expected);
  });
});
