function submit() {
  var numb1 = document.getElementById("first").value;
  var numb2 = document.getElementById("second").value;
  var oper = document.getElementById("oper").value;

  if (oper == "somar") {
    var resultado = Number(numb1) + Number(numb2);
  } else if (oper == "subtrair") {
    var resultado = numb1 - numb2;
  } else if (oper == "multiplicar") {
    var resultado = numb1 * numb2;
  } else if (oper == "dividir") {
    var resultado = numb1 / numb2;
  }

  var label = document.querySelector(".resultado");

  label.innerHTML = resultado;
}

var reset = document.querySelector(".resultado");

function resetar() {
  reset.innerHTML = "";
}
