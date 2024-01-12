function CalcularFact() {
    // Obtiene el número ingresado por el usuario
    const numero = document.getElementById("numero").value;
  
    // Verifica si el número ingresado es de tipo number
    if (typeof numero === "number") {
        true;
    } else {
        alert("El numero ingresado no es un numero")
        return;
    }

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
    document.querySelector("#resultado").innerHTML = factorial;
  }