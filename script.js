const shareButton = document.querySelector(".share-button");
const menuPopUp = document.querySelector(".Menu");


shareButton.addEventListener("click", () => {

  menuPopUp.classList.toggle("menu-pop-up");
});
