const calcular = document.getElementById("calcular");
const resultado = document.getElementById("resultado");
const numeroInput = document.getElementById("numero"); // Obtener la referencia al campo de texto

const calcularFactorial = (numero) => {
  let factorial = 1;

  for (let i = numero; i > 0; i--) {
    factorial *= i;
  }

  return factorial;
};

if (calcular) {
  calcular.addEventListener("click", () => {
    let numeroIngresado = numeroInput.value; // Obtener el valor del campo de texto

    let numeroFloat = parseFloat(numeroIngresado);

    if (isNaN(numeroFloat)) {
      resultado.textContent = "El dato de entrada no es un número válido.";
      return;
    }

    let numero = numeroIngresado;

    resultado.textContent = `El factorial del numero ${numero} es: ${calcularFactorial(numero)}`;
  });
}
