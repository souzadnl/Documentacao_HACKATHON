let ul = document.getElementById('#ulClick')
var showSidebar = false;
let show = true;

ul.addEventListener("click", () => {
  navigation.classList.toggle("on", show)
  show = !show;
})