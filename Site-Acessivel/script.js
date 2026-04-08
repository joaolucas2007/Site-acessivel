// Validação de formulário
const form = document.getElementById("formulario");
if(form){
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    let valido = true;

    function validarCampo(inputId, erroId) {
      const campo = document.getElementById(inputId);
      const erro = document.getElementById(erroId);
      erro.textContent = "";
      campo.classList.remove("erro-input");

      if (!campo.value.trim()) {
        erro.textContent = "Este item é obrigatório";
        campo.classList.add("erro-input");
        valido = false;
      }
    }

    validarCampo("nome", "erro-nome");
    validarCampo("email", "erro-email");
    validarCampo("senha", "erro-senha");
    validarCampo("cpf", "erro-cpf");
    validarCampo("data", "erro-data");

    const genero = document.querySelector('input[name="genero"]:checked');
    const erroGenero = document.getElementById("erro-genero");
    erroGenero.textContent = "";
    if (!genero) {
      erroGenero.textContent = "Este item é obrigatório";
      valido = false;
    }

    if (valido) {
      alert("Formulário enviado com sucesso!");
      form.reset();
    }
  });
}

// Acessibilidade: aumentar/diminuir fonte e contraste
let tamanhoFonte = 100;

const btnAumentar = document.getElementById("aumentar-fonte");
const btnDiminuir = document.getElementById("diminuir-fonte");
const btnContraste = document.getElementById("contraste");

btnAumentar?.addEventListener("click", () => {
  tamanhoFonte += 10;
  document.body.style.fontSize = tamanhoFonte + "%";
});

btnDiminuir?.addEventListener("click", () => {
  tamanhoFonte -= 10;
  document.body.style.fontSize = tamanhoFonte + "%";
});

btnContraste?.addEventListener("click", () => {
  document.body.classList.toggle("alto-contraste");
});