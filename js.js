const getInitialState = () => {
  const initialValue = localStorage.getItem("darkMode");

  if(initialValue === null){
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  return initialValue == "true";
}

let darkMode = getInitialState();

if (darkMode) {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

function toggle_dark_mode() {
  darkMode = !darkMode; //invert our variable
  localStorage.setItem("darkMode", darkMode); //save it in local storage
  var element = document.body;
  element.classList.toggle("dark-mode");
}
