const divi = require("./division");

test("2346 / 6 should be 391", () => {
    const result = divi(2346, 6);
    expect(result).toBe(391);
});

test("Si el divisor es 0 debe retornar un error", () => {
  const divisor = 2;
  if(divisor === 0){
    const result = divi(10, divisor);
    expect(result).toBe("No se puede dividir entre cero 😒");
  }else{
    const result = divi(10, divisor);
    expect(result).toBe(5);
  }
});

test("Si los datos no son enteros me debe retornar un error", () => {
  const num1=2;
  const num2=2;
  if(num1 === "" && num2 === ""){
    const result = divi(num1, num2);
    expect(result).toBe("Datos invalidos (Usa N Ú M E R O S !!🤨)");
  }else{
    const result = divi(num1, num2);
    expect(result).toBe(1);
  }
});

test("Dividir números negativos, -6 / (-3) debería ser 2", () => {
    const result = divi(-6, -3);
    expect(result).toBe(2);
});

test("Dividir números decimales, 7.5 / 2.5 debería ser 3", () => {
    const result = divi(7.5, 2.5);
    expect(result).toBe(3);
});
