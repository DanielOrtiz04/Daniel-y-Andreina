type="text/javascript"
function ingresarnumero(numero) {
    document.Calculadora.txtboxnros.value += numero;
  }

  function ingresaoperacion(operador) {
    document.Calculadora.txtboxnros.value += operador;
  }

  function raiz() {
    var numero = document.Calculadora.txtboxnros.value;
    document.Calculadora.txtboxnros.value = Math.sqrt(numero);
  }

  function limpiar() {
    document.Calculadora.txtboxnros.value = "";
  }

  function resultado() {
    var resultado = eval(document.Calculadora.txtboxnros.value);
    document.Calculadora.txtboxnros.value = resultado;
  }