const a = 1;
const b = 1;
const c = 1;
if (a === b && b === c) {
  console.log("Les trois variables sont identiques");
} else if (a === b || b === c || c === a) {
  console.log("Deux des variables sont identiques");
} else {
  console.log("Toutes les variables sont différentes");
}
