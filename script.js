const botao = document.querySelector(".switcher > button")

botao.onclick = function switcher() {
  if (document.body.classList.contains("dark")) {
    document.body.classList.remove("dark")
  } else {
    document.body.classList.add("dark")
  }
}
