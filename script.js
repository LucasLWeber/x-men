const personagens = document.querySelectorAll(".personagem");

personagens.forEach((personagem) => {
  personagem.addEventListener("mouseenter", () => {
    if (window.innerWidth < 450) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    removerSelecaoPersonagem();
    personagem.classList.add("selecionado");
    alterarImagemSelecionado(personagem);
    alterarNomePersonagemSelecionado(personagem);
    alterarDescPersonagemSelecionado(personagem);
  });
});

function removerSelecaoPersonagem() {
  const personagemSelecionado = document.querySelector(".selecionado");
  personagemSelecionado.classList.remove("selecionado");
}

function alterarImagemSelecionado(personagem) {
  const imagemPersonagemGrande = document.querySelector(".personagem-grande");
  const idPersonagem = personagem.attributes.id.value;
  imagemPersonagemGrande.src = `/img/card-${idPersonagem}.png`;
}

function alterarNomePersonagemSelecionado(personagem) {
  const nomePersonagem = document.getElementById("nome-personagem");
  nomePersonagem.innerText = personagem.getAttribute("data-name");
}

function alterarDescPersonagemSelecionado(personagem) {
  const descricaoPersonagem = document.getElementById("desc-personagem");
  descricaoPersonagem.innerText = personagem.getAttribute("data-description");
}
