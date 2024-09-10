const searchInput = document.getElementById("search_input");
let suggestions = ["manual", "suporte", "treinamento"];

searchInput.addEventListener("input", (e) => {
  let tab = e.target.value.toLowerCase();

  for (let i = 0; i < tab.length; i++) {
    if (tab.includes(suggestions[i])) {
      window.open(`../${suggestions[i]}-page/${suggestions[i]}.html`, "_self");
    }
  }
});
