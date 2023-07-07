function toggleMode() {
  const html = document.documentElement;

  /* ***UMA DAS FORMAS DE FAZER:***
    if (html.classList.contains("ligth")) {
      html.classList.remove("ligth");
    } else {
      html.classList.add("ligth");
    }
    */

  html.classList.toggle("ligth");

  const img = document.querySelector("#profile img");

  if (html.classList.contains("ligth")) {
    Image.setAttribute("scr", "./assets/avatar-light.png");
  } else {
    Image.setAttribute("scr", "./assets/avatar.png");
  }
}
