const tekst = document.getElementById("tekst");
const togglebtn = document.getElementById("togglebtn");

togglebtn.addEventListener("click", showMoreOrLess);

function showMoreOrLess() {
  if (tekst.classList.contains("foldout")) {
    tekst.classList.remove("foldout");
    togglebtn.textContent = "Vis mindre";
  } else {
    tekst.classList.add("foldout");
    togglebtn.textContent = "Vis mere";
  }
}
