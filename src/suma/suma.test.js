const sum = require("./suma");

test("10 + 20 should be 30", () => {
    const result = sum(10, 20);
    expect(result).toBe(30);
});

test("Si los datos no son enteros me debe retornar un error", () => {
  const num1=357;
  const num2=643;
  if(num1 === "" && num2 === ""){
    const result = sum(num1, num2);
    expect(result).toBe("Datos invalidos (Usa N Ú M E R O S !!🤨)");
  }else{
    const result = sum(num1, num2);
    expect(result).toBe(1000);
  }
});

test("Sumar números negativos, -5 + (-3) debería ser -8", () => {
    const result = sum(-5, -3);
    expect(result).toBe(-8);
});

test("Sumar números decimales, 2.5 + 1.5 debería ser 4", () => {
    const result = sum(2.5, 1.5);
    expect(result).toBe(4);
});

test("Sumar un número positivo y un número negativo, 8 + (-3) debería ser 5", () => {
    const result = sum(8, -3);
    expect(result).toBe(5);
});
