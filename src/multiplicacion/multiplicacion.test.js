const rest = require("./multiplicacion");

test("45 * 2 should be 90", () => {
  // sujeto de prueba
  const result = rest(45, 2);
  // test
  expect(result).toBe(90);
});