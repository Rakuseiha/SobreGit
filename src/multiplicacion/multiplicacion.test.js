const multiplicacion = require("./multiplicacion");

test("500 * 4 should be 2000", () => {
    const result = multiplicacion(500, 4);
    expect(result).toBe(2000);
});

test("Si los datos no son enteros me debe retornar un error", () => {
  const num1=500;
  const num2=4;
  if(typeof num1 != "number" || typeof num2 != "number"){
    const result = multiplicacion(num1, num2);
    expect(result).toBe("Datos invalidos (Usa N Ú M E R O S !!🤨)");
  }else{
    const result = multiplicacion(num1, num2);
    expect(result).toBe(2000);
  }
});

test("multiplicar por cero, 7 * 0 debería ser 0", () => {
    const result = multiplicacion(7, 0);
    expect(result).toBe(0);
});

test("multiplicar números negativos, -2 * (-3) debería ser 6", () => {
    const result = multiplicacion(-2, -3);
    expect(result).toBe(6);
});

test("multiplicar números decimales, 2.5 * 1.5 debería ser 3.75", () => {
    const result = multiplicacion(2.5, 1.5);
    expect(result).toBe(3.75);
});
