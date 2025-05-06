/*
// ------------------ Practica 2------------------
function mostrarFigura() {
    const valor = document.getElementById("figura").value;
    const resultado = document.getElementById("resultado");
    const imagen = document.getElementById("imagen");

    if (valor === "0") {
      resultado.textContent = "Círculo";
      imagen.src = "fotos/circulo.png";
      imagen.style.display = "block";
    } else {
      if (valor === "3") {
        resultado.textContent = "Triángulo";
        imagen.src = "fotos/triangulo.webp";
        imagen.style.display = "block";
      } else {
        if (valor === "4") {
          resultado.textContent = "Cuadrado";
          imagen.src = "fotos/cuadrado.svg";
          imagen.style.display = "block";
        } else {
            if (valor === "5") {
                resultado.textContent = "Pentágono";
                imagen.src = "fotos/pentagono.svg";
                imagen.style.display = "block";
          } 
        }
      }
    }
  }
    */
   // ------------------ Practica 3------------------
   function mostrarFigura() {
    const valor = document.getElementById("figura").value;
    const resultado = document.getElementById("resultado");
    const imagen = document.getElementById("imagen");
  
    switch (valor) {
      case "0":
        resultado.textContent = "Círculo";
        imagen.src = "Circulo.jpg";
        imagen.style.display = "block";
        break;
      case "3":
        resultado.textContent = "Triángulo";
        imagen.src = "cuadrado.jpg";
        imagen.style.display = "block";
        break;
      case "4":
        resultado.textContent = "Cuadrado";
        imagen.src = "fotos/cuadrado.svg";
        imagen.style.display = "block";
        break;
      case "5":
        resultado.textContent = "Pentágono";
        imagen.src = "fotos/pentagono.svg";
        imagen.style.display = "block";
        break;

    }
  }
