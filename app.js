const mudar = document.getElementById("mudar");
const tema = window.localStorage.getItem("tema");

if (tema == "dark"){
  document.body.classList.add("dark");
} 

mudar.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if (tema == "dark") {
    window.localStorage.setItem("tema", "light");
  } 
  else{
    window.localStorage.setItem("tema", "dark");
  } 
});
