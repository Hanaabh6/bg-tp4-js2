"use strict";
// Déclarer le tableau persons
// Cours : slides 38 et 40 (Tableaux et tableaux d'objets)

let persons = [
    { nom: "nom-1", prenom: "prenom-1", points: 5 },
    { nom: "nom-2", prenom: "prenom-2", points: 10 },
    { nom: "nom-3", prenom: "prenom-3", points: 15 }
];
// Déclarer le compteur lignes et l'initialiser à 0
// Cours : slide 37 (Variables)
let lignes = 0;
// Fonction pour insérer une ligne dans le tableau
// Cours : slide 45 (Fonctions)

function doInsertRowTable(num, nom, prenom, points) {

    // Récupérer le tableau
    // Cours : slide 61 (getElementById)
    const table = document.getElementById("persons_table");

    // Créer une nouvelle ligne
    // Cours : slides 104 et 105 (Création d'éléments)
    const row = document.createElement("tr");

    // Créer les colonnes
    const col1 = document.createElement("td");
    const col2 = document.createElement("td");
    const col3 = document.createElement("td");
    const col4 = document.createElement("td");
    const col5 = document.createElement("td");

    // Remplir les colonnes
    // Cours : slide 91 (innerText)
    col1.innerText = num;
    col2.innerText = nom;
    col3.innerText = prenom;
    col4.innerText = points;

    // Ajouter les classes CSS
    // Cours : slide 108 (classList)
    col1.classList.add("col_number");
    col2.classList.add("col_text");
    col3.classList.add("col_text");
    col4.classList.add("col_number");
    col5.classList.add("col_chkbox");

    // Créer la checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    // Ajouter la checkbox
    // Cours : slide 105 (appendChild)
    col5.appendChild(checkbox);

    // Ajouter les colonnes à la ligne
    row.appendChild(col1);
    row.appendChild(col2);
    row.appendChild(col3);
    row.appendChild(col4);
    row.appendChild(col5);

    // Ajouter la ligne au tableau
    table.tBodies[0].appendChild(row);
}
// Fonction doInsert
// Cours : slide 45 (Fonctions)
function doInsert(nom, prenom, points) {

    // Incrémenter le compteur
    // Cours : slide 41 (Opérateurs)
    lignes = lignes + 1;

    // Insérer la nouvelle ligne
    doInsertRowTable(lignes, nom, prenom, points);
}
// Cours : slides 44 et 45 (Boucles et fonctions)
function init() {

    // Parcourir le tableau persons
    // Cours : slide 44 (Boucle for...of)
    for (const personne of persons) {

        // Insérer chaque personne dans le tableau HTML
        doInsert(personne.nom, personne.prenom, personne.points);
    }
}
// Appel de init()
init();

// Fonction pour afficher le tableau persons dans la console
// Cours : slide 33 (console.log) et slide 45 (Fonctions)
function consoleTableau() {
    console.log(persons);
}