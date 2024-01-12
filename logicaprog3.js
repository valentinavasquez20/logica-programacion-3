function calcularFactorial() {
    // Obtiene el número ingresado por el usuario
    const numero = document.getElementById("numero").value;
  
    // Verifica si el número ingresado es de tipo number
    if (!Number.isInteger(numero)) {
      alert("El dato ingresado debe ser un número entero.");
      return;
    }
  
    // Calcula el factorial del número
    let factorial = 1;
    for (let i = numero; i > 0; i--) {
      factorial *= i;
    }
  
    // Imprime el resultado en el DOM
    document.querySelector("#resultado").innerHTML = factorial;
  }