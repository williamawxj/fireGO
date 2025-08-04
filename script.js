document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const tipo = document.getElementById("tipo").value;

      if (tipo === "receptor") {
        window.location.href = "escala.html";
      } else if (tipo === "acionador") {
        window.location.href = "acionamento.html";
      } else {
        alert("Selecione o tipo de usuário.");
      }
    });
  }
});
