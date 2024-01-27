function CalcularFact() {
    // Obtiene el número ingresado por el usuario
    const numero = document.getElementById("numero").value;
  

    //if (!Number.type(numero)) {
    //  alert("El dato ingresado debe ser un número entero.");
    //  return;
    //}
  
    // Calcula el factorial del número
    let factorial = 1;
    for (let i = numero; i > 0; i--) {
      factorial *= i;
    }
  
    // Imprime el resultado en el DOM
    document.querySelector("resultado").innerHTML = factorial;
  }