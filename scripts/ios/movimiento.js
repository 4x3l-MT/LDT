const fifteenButton = document.getElementById("iOS15");
const contfifteen = document.getElementById("cont15");

const sixteenButton = document.getElementById("iOS16");
const contsixteen = document.getElementById("cont16");

const seventeenButton = document.getElementById("iOS17");
const contseventeen = document.getElementById("cont17");

const eighteenButton = document.getElementById("iOS18");
const conteighteen = document.getElementById("cont18");

const twentysixButton = document.getElementById("iOS26");
const conttwentysix = document.getElementById("cont26");

fifteenButton.addEventListener("click", () => {
    if (contfifteen) {
    contfifteen.scrollIntoView({ behavior: 'smooth' }); 
  }
});

sixteenButton.addEventListener("click", () => {
    if (contsixteen) {
    contsixteen.scrollIntoView({ behavior: 'smooth' }); 
  }
});

seventeenButton.addEventListener("click", () => {
    if (contseventeen) {
    contseventeen.scrollIntoView({ behavior: 'smooth' }); 
  }
});

eighteenButton.addEventListener("click", () => {
    if (conteighteen) {
    conteighteen.scrollIntoView({ behavior: 'smooth' }); 
  }
});

twentysixButton.addEventListener("click", () => {
    if (conttwentysix) {
    conttwentysix.scrollIntoView({ behavior: 'smooth' }); 
  }
});