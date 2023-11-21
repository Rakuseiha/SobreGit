const rest = require("./resta");

test("45 - 20 should be 25", () => {
  // sujeto de prueba
  const result = rest(45, 20);
  // test
  expect(result).toBe(25);
});