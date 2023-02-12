const botao = document.querySelector(".switcher > button")

botao.onclick = function switcher() {
  if (document.body.classList.contains("dark")) {
    document.body.classList.remove("dark")
  } else {
    document.body.classList.add("dark")
  }
}

const versoBotao = document.querySelector("#verso > button")
const verso = document.querySelector("#verso")
const frenteBotao = document.querySelector("footer > button")
const frente = document.querySelector("#container")

versoBotao.onclick = function sumir() {
  verso.style.display = "none"
  frente.style.display = "inline"
}

frenteBotao.onclick = function aparecer() {
  verso.style.display = "flex"
  frente.style.display = "none"
}
