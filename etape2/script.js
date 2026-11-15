"use strict";
// Fonction pour insérer une nouvelle ligne dans le tableau
// Cours : slide 45 (Fonctions)
function doInsertRowTable(num, nom, prenom, points) {
    // Récupérer le tableau
    // Cours : slide 61 (getElementById)
    const table = document.getElementById("persons_table");
    // Créer une nouvelle ligne
    // Cours : slides 104 et 105 (Création d'un élément HTML)
    const row = document.createElement("tr");
    // Créer les cinq colonnes
    const col1 = document.createElement("td");
    const col2 = document.createElement("td");
    const col3 = document.createElement("td");
    const col4 = document.createElement("td");
    const col5 = document.createElement("td");
    // Remplir le contenu des colonnes
    // Cours : slide 91 (innerText)
    col1.innerText = num;
    col2.innerText = nom;
    col3.innerText = prenom;
    col4.innerText = points;
    // Cours : slide 108 (classList)
    col1.classList.add("col_number");
    col2.classList.add("col_text");
    col3.classList.add("col_text");
    col4.classList.add("col_number");
    col5.classList.add("col_chkbox");
    // Créer la checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    // Ajouter la checkbox dans la dernière colonne
    // Cours : slide 105 (appendChild)
    col5.appendChild(checkbox);
    // Ajouter les colonnes dans la ligne
    row.appendChild(col1);
    row.appendChild(col2);
    row.appendChild(col3);
    row.appendChild(col4);
    row.appendChild(col5);
    // Ajouter la ligne dans le tableau slid 103
    table.tBodies[0].appendChild(row);
}