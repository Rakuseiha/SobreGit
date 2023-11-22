const rest = require("./resta");

test("45 - 20 should be 25", () => {
    const result = rest(45, 20);
    expect(result).toBe(25);
});

test("Si los datos no son enteros me debe retornar un error", () => {
  const num1=4322;
  const num2=76;
  if(num1 !== "" && num2 !== ""){
    const result = rest(num1, num2);
    expect(result).toBe(4246);
  }else if(num1 === "" && num2 === ""){
    const result = rest(num1, num2);
    expect(result).toBe("Datos invalidos (Usa N Ú M E R O S !!🤨)");
  }
});


test("restar números negativos, -5 - (-3) debería ser -2", () => {
    const result = rest(-5, -3);
    expect(result).toBe(-2);
});

test("restar números decimales, 5.5 - 2.5 debería ser 3", () => {
    const result = rest(5.5, 2.5);
    expect(result).toBe(3);
});

test("restar un número positivo y un número negativo, 8 - (-3) debería ser 11", () => {
    const result = rest(8, -3);
    expect(result).toBe(11);
});
