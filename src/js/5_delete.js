// Creo un evento para todos lo iconos
// hago la función manejadora y dentro un bucle
// comparo el id de cual quito y donde pincho
// y mando pintar

function addIconsEvent() {
  const icons = document.querySelectorAll(".js-bDelete");
  for (const eachIcons of icons) {
    eachIcons.addEventListener("click", handleIcons);
  }
}
function handleIcons(ev) {
  console.log("aspita");
  const deleteFav = favouriteCharacters.findIndex(
    (eachCharactersObj) =>
      eachCharactersObj.char_id === parseInt(ev.currentTarget.id)
  );
  console.log(favouriteCharacters);
  favouriteCharacters.splice(deleteFav, 1);
  console.log("second", favouriteCharacters);

  localStorage.setItem("favourites", JSON.stringify(favouriteCharacters));
  renderFavourites();
  renderCharacters();
}
