const sum = require("./suma");

test("10 + 20 should be 30", () => {
  // sujeto de prueba
  const result = sum(10, 20);
  // test
  expect(result).toBe(30);
});

test("si los datos no son enteros me debe retornar un error", () => {
  const err = "datos invalidos";
  const result = sum("10", "20");
  expect(result).toBe(err);
});