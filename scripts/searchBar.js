const searchInput = document.getElementById("search_input");
let suggestions = ["manual", "suporte", "treinamento"];

searchInput.addEventListener("input", (e) => {
  let tab = e.target.value.toLowerCase();
  let path = window.location.pathname;
  let page = path.split("/").pop();
  console.log(page);

  for (let i = 0; i < tab.length; i++) {
    if (tab.includes(suggestions[i])) {
      if (page === "index.html") {
        window.open(
          `./pages/${suggestions[i]}-page/${suggestions[i]}.html`,
          "_self"
        );
      } else {
        window.open(
          `../${suggestions[i]}-page/${suggestions[i]}.html`,
          "_self"
        );
      }
    }
  }
});
