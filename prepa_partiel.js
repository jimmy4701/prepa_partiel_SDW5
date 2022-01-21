/* 
    ==== Elements à valider pendant le partiel ====
    - Créer le fichier HTML, JS, et CSS
    - Lier le fichier JS et CSS au fichier HTML

*/

// Afficher un texte pour vérifier que le javascript est bien chargé
console.log("Le fichier JS est bien chargé")

var total_clicks = 0

// Récupérer le bouton qui a l'id "btn"
const bouton = document.getElementById('btn')

// Fonction qui gère ce que l'on fait à chaque clic
const handleClick = (value) => {
    console.log("La valeur est ", value)
}

// Créez une fonction "addition" qui prend deux paramètres a et b et qui écrit
// la somme de a et b en console
// Ex: si j'appelle addition(20, 13) la console doit afficher 33
const addition = (a,b) => {
    console.log(a + b)
}

addition(20 , 13)

console.log("Total de clics", total_clicks)

