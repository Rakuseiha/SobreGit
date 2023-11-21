const rest = require("./division");

test("70 / 10 should be 7", () => {
  // sujeto de prueba
  const result = rest(70, 10);
  // test
  expect(result).toBe(7);
});