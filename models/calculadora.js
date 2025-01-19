function somar(number1, number2) {
  if (
    typeof number1 !== "number" || 
    typeof number2 !== "number" || 
    Number.isNaN(number1) || 
    Number.isNaN(number2)
  ) {
    return "Erro";
  }
  return number1 + number2;
}

exports.somar = somar;
