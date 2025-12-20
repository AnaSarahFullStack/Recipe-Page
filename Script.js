// Espera a página carregar
document.addEventListener("DOMContentLoaded", function() {
  // Cria botão dinamicamente
  const button = document.createElement("button");
  button.textContent = "Mostrar/Esconder Ingredientes";

  // Seleciona a lista de ingredientes
  const ingredientes = document.querySelector("ul");

  // Adiciona funcionalidade ao botão
  button.addEventListener("click", function() {
    if (ingredientes.style.display === "none") {
      ingredientes.style.display = "block";
    } else {
      ingredientes.style.display = "none";
    }
  });

  // Insere o botão antes da lista de ingredientes
  ingredientes.parentNode.insertBefore(button, ingredientes);
});

