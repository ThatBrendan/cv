const onePiece = document.querySelector(".onepiece");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

/*make nav-button work according to CSS attribute*/
onePiece.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});
