"use strict";

// Déclarer le tableau persons
// Cours : slides 38 et 40

let persons = [
    { nom: "nom-1", prenom: "prenom-1", points: 5 },
    { nom: "nom-2", prenom: "prenom-2", points: 10 },
    { nom: "nom-3", prenom: "prenom-3", points: 15 }
];

// Déclarer les variables
// Cours : slide 37

let lignes = 0;
let total_points = 0;


// Fonction pour insérer une ligne
// Cours : slide 45

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

    // Ajouter la checkbox
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
    lignes = lignes + 1;
    total_points = total_points + points;
    doInsertRowTable(lignes, nom, prenom, points);

    update_summary();
}


// Fonction init
// Cours : slide 44

function init() {

    for (const personne of persons) {

        doInsert(personne.nom, personne.prenom, personne.points);
    }
}


// Fonction pour mettre à jour le résumé
// Cours : slides 61 et 91

function update_summary() {

    const element_lignes = document.getElementById("p1");

    const element_points = document.getElementById("p3");

    element_lignes.innerText = lignes + " ligne(s)";
	element_points.innerText = "Total point(s)= " + total_points;}


// Fonction pour afficher persons dans la console
// Cours : slide 33

function consoleTableau() {

    console.log(persons);
}


// Fonction pour récupérer les données du formulaire
// Cours : slides 45 et 61

function doNewData() {

    // Récupérer les champs de saisie
    const elt_nom = document.getElementById("form_nom");

    const elt_prenom = document.getElementById("form_prenom");

    const elt_points = document.getElementById("form_points");


    // Récupérer les valeurs des champs
    let nom = elt_nom.value;

    let prenom = elt_prenom.value;

    let points = parseInt(elt_points.value);


    // Vérifier que les champs ne sont pas vides
    if (nom.trim() == "" || prenom.trim() == "" || elt_points.value == "" || Number.isNaN(points)) {
    alert("Formulaire incomplet !");
}
    else {
        // Insérer les nouvelles données dans le tableau HTML
        doInsert(nom, prenom, points);

        // Ajouter les données dans le tableau persons
        persons.push({
            nom: nom,
            prenom: prenom,
            points: points
        });

        // Vider les champs
        elt_nom.value = "";
        elt_prenom.value = "";
        elt_points.value = "";
    }
}
// Appeler init
init();