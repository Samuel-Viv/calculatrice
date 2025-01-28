// @ts-nocheck
// Recupération  des éléments du DOM

let formule = document.getElementById("formule");
let result = document.getElementById("result");

/**
 *
 * @description Fonction qui permet d'ajouter un chiffre ou un opérateur à la formule
 * @param {string} value chiffre ou opérateur
 * @returns {void}
 *
 */

function click_touch(value) {
  formule.value += value;
}

/**
 *
 * @description Fonctions qui permet de supprimer le dernier élément de la formule ou supprimer le resultat
 * @returns {void}
 *
 */

function delete_result() {
  result.value = "0";
  formule.value = "";
}

function delete_formule() {
  currentValue = formule.value;
  formule.value = currentValue.slice(0, -1);
}

/**
 *
 * @description Fonction qui permet de calculer le resultat de la formule
 * @returns {void}
 */

function equal() {
  let a = formule.value;
  let b = eval(a);
  document.getElementById("result").value = b;
  console.log(result.value);

  //Si on commence par un opérateur, on concaténe le resultat avec la formule
  if (result.value === 0) {
    formule.value = result.value;
  }
}

// Fonction qui permet de valider la formule avec la touche entrée
document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    equal();
  }
});
