import { encryptText } from "./components/encrypt.js";
import { decryptText } from "./components/decrypt.js";

document.addEventListener("DOMContentLoaded", () => {
  const inputText = document.querySelector(".input_text-to-encrypt");
  const encryptButton = document.querySelector(".encrypt--button");
  const decryptButton = document.querySelector(".decrypt--button");
  const alertSection = document.querySelector(".alert");
  const alertHeader = document.querySelector(".alert--header");
  const alertText = document.querySelector(".alert--text");
  const alertImage = document.querySelector(".alert--image");
  const resultSection = document.querySelector(".result");
  const resultText = document.querySelector(".result-text");

  // Función para ajustar la altura del textarea
  const adjustTextareaHeight = (textarea) => {
    textarea.style.height = "auto"; // Restablecer la altura para calcular la altura del scroll
    textarea.style.height = `${textarea.scrollHeight}px`; // Ajustar la altura al contenido
  };

  // Función para actualizar la visibilidad de los elementos de alerta
  const updateAlertVisibility = () => {
    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;

    if (inputText.value.trim() === "") {
      // Mostrar alerta y ocultar resultado si no hay texto
      alertSection.classList.add("visible");
      alertHeader.classList.add("visible");
      alertText.classList.add("visible");
      resultSection.style.display = "none";
      if (isDesktop) {
        alertImage.classList.add("visible");
      } else {
        alertImage.classList.remove("visible");
      }
    } else {
      // Ocultar alerta y mostrar resultado si hay texto
      alertSection.classList.remove("visible");
      alertHeader.classList.remove("visible");
      alertText.classList.remove("visible");
      resultSection.style.display = "block";
      alertImage.classList.remove("visible");
    }
  };

  // Función para aplicar el estilo activo al botón clicado
  const activateButton = (button) => {
    // Elimina la clase activa de todos los botones
    encryptButton.classList.remove("button--active");
    decryptButton.classList.remove("button--active");

    // Añade la clase activa al botón clicado
    button.classList.add("button--active");
  };

  // Ajustar la altura del textarea al cargar la página
  adjustTextareaHeight(inputText);
  // Inicializar visibilidad de alerta
  updateAlertVisibility();

  // Ajustar la altura del textarea al ingresar texto y actualizar visibilidad
  inputText.addEventListener("input", () => {
    adjustTextareaHeight(inputText);
    updateAlertVisibility();
  });

  // Manejar el evento de encriptar

  encryptButton.addEventListener("click", () => {
    const text = inputText.value;
    if (text.trim() !== "") {
      resultText.value = encryptText(text);
      updateAlertVisibility();
      adjustTextareaHeight(resultText); // Actualizar altura del resultado
    }
    activateButton(encryptButton); // Aplicar clase activa al botón de encriptar
  });

  // Manejar el evento de desencriptar

  decryptButton.addEventListener("click", () => {
    const text = inputText.value;
    if (text.trim() !== "") {
      resultText.value = decryptText(text);
      updateAlertVisibility();
      adjustTextareaHeight(resultText); // Actualizar altura del resultado
    }
    activateButton(decryptButton);
  });

  // Actualizar visibilidad en caso de cambio de tamaño de ventana
  window.addEventListener("resize", updateAlertVisibility);
});
