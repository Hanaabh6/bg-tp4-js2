"use strict";
// Déclarer le tableau persons
// cours : slides 38 et 40 (Tableaux et objets)
let persons = [
    { nom: "nom-1", prenom: "prenom-1", points: 5 },
    { nom: "nom-2", prenom: "prenom-2", points: 10 },
    { nom: "nom-3", prenom: "prenom-3", points: 15 }
];
// Déclarer les variables
// Cours : slide 37 (Variables)
let lignes = 0;
let total_points = 0;
// Fonction pour insérer une ligne
// Cours : slide 45 (Fonctions)
function doInsertRowTable(num, nom, prenom, points) {
    const table = document.getElementById("persons_table");
    // Créer une ligne
    // Cours : slides 104 et 105
    const row = document.createElement("tr");
    // Créer les colonnes
    const col1 = document.createElement("td");
    const col2 = document.createElement("td");
    const col3 = document.createElement("td");
    const col4 = document.createElement("td");
    const col5 = document.createElement("td");

    // Remplir les colonnes
    // Cours : slide 91
    col1.innerText = num;
    col2.innerText = nom;
    col3.innerText = prenom;
    col4.innerText = points;

    // Ajouter les classes CSS
    // Cours : slide 108
    col1.classList.add("col_number");
    col2.classList.add("col_text");
    col3.classList.add("col_text");
    col4.classList.add("col_number");
    col5.classList.add("col_chkbox");

    // Créer la checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    // Ajouter la checkbox à la colonne
    // Cours : slide 105
    col5.appendChild(checkbox);

    // Ajouter les colonnes à la ligne
    row.appendChild(col1);
    row.appendChild(col2);
    row.appendChild(col3);
    row.appendChild(col4);
    row.appendChild(col5);

    // Ajouter la ligne dans le tableau slid 103
    table.tBodies[0].appendChild(row);
}
// Fonction d'insertion
// Cours : slide 45
function doInsert(nom, prenom, points) {

    // Incrémenter le nombre de lignes
    lignes = lignes + 1;

    // Ajouter les points au total
    total_points = total_points + points;

    // Insérer la ligne
    doInsertRowTable(lignes, nom, prenom, points);

    // Mettre à jour le résumé
    update_summary();
}
// Fonction init
// Cours : slide 44 (Boucle for...of)

function init() {

    for (const personne of persons) {

        doInsert(personne.nom, personne.prenom, personne.points);
    }
}
// Fonction pour mettre à jour le résumé
// Cours : slides 61 et 91 (getElementById et innerText)
function update_summary() {

    // Récupérer l'élément p1
    const element_lignes = document.getElementById("p1");

    // Récupérer l'élément p3
    const element_points = document.getElementById("p3");

    // Afficher le nombre de lignes
    element_lignes.innerText = lignes + " ligne(s)";

    // Afficher le total des points
    element_points.innerText = "Totale point(s)= " + total_points;
}
// Afficher le tableau persons dans la console
// Cours : slide 33

function consoleTableau() {

    console.log(persons);
}
// Appeler init
init();