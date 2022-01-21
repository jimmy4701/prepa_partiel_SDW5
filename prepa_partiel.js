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

// Quand on appelle handleClick, ça doit ajouter 1 à la variable "total_clicks"
// et afficher la variable total_clicks en console
const handleClick = () => {
    total_clicks++
    console.log("Total de clics", total_clicks)
}

