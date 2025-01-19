const calculadora = require("../../models/calculadora.js")

test("sum 2+2 is expected to be return 4", () => {
  const resultado = calculadora.somar(2, 2);
  expect(resultado).toBe(4);
})

test("sum 5+100 is expected to be return 105", () => {
  const resultado = calculadora.somar(5, 100);
  expect(resultado).toBe(105);
})

test("somar 'banana' + 100 deveria retornar 'Erro'", () => {
  const resultado = calculadora.somar("banana", 100);
  expect(resultado).toBe("Erro");
})