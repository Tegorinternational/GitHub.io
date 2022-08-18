const input = document.querySelector("input");
const notFound = document.getElementById("not-found");

const filterFunction = () => {
  const cards = document.querySelectorAll(".slide-card");
  cards.forEach((item) => {
    let whatToSearch = item.querySelector("p");
    if (
      whatToSearch.innerHTML.toUpperCase().indexOf(input.value.toUpperCase()) >
      -1
    ) {
      item.style.display = "";
      notFound.style.display = "none";
    } else {
      item.style.display = "none";
      notFound.style.display = "flex";
      
    }
  });
};
input.addEventListener("keyup", filterFunction);
