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

    element_points.innerText = "Totale point(s)= " + total_points;
}


// Fonction pour afficher le tableau persons dans la console
// Cours : slide 33

function consoleTableau() {

    console.log(persons);
}


// Fonction pour récupérer les données du formulaire
// Cours : slides 45 et 61

function doNewData() {

    // Récupérer les champs de saisie
    // Cours : slide 61
    const elt_nom = document.getElementById("form_nom");

    const elt_prenom = document.getElementById("form_prenom");

    const elt_points = document.getElementById("form_points");


    // Récupérer les valeurs
    // Cours : slide 93
    let nom = elt_nom.value;

    let prenom = elt_prenom.value;

    let points = parseInt(elt_points.value);


    // Validation des champs

    if (nom == "") {
        alert("Veuillez saisir le nom !");
        elt_nom.focus();
        return;
    }

    if (prenom == "") {
        alert("Veuillez saisir le prénom !");
        elt_prenom.focus();
        return;
    }

    if (elt_points.value == "" ||
         !Number.isInteger(points) || points <0 ){
        alert("Veuillez saisir un nombre entier de points positif ou nul !");
        elt_points.focus();
        return;
    }

        // Insérer les données dans le tableau HTML
        doInsert(nom, prenom, points);

        // Ajouter les données dans persons
        // Cours : slide 38
        persons.push({
            nom: nom,
            prenom: prenom,
            points: points
        });

      // Vider les champs après l'ajout
          resetForm();
    }

// fonction pout la Reinitialisation du formulaire 
function resetForm() {

    document.getElementById("form_nom").value = "";
    document.getElementById("form_prenom").value = "";
    document.getElementById("form_points").value = "";

}

//Fonction pour le mode sombre / le mode claire 
function toggleTheme() {

    document.body.classList.toggle("dark-mode");

    const themeBtn = document.getElementById("themeBtn");

    if (document.body.classList.contains("dark-mode")) {

        themeBtn.innerText = " Mode clair";

    } else {

        themeBtn.innerText = "Mode sombre";

    }

}

// Fonction pour supprimer les lignes sélectionnées
// TP : slide 61 (Logique de suppression)
function deleteRow() {
  // Étape 1 : vérifier si le tableau est vide
    if (lignes == 0) {
        alert("Le tableau est vide !");
        return;
    }
  // Étape 2 : récupérer le tableau et les checkbox
   // Cours : slides 76 et 77 (querySelector et querySelectorAll)
   const table = document.getElementById("persons_table");
    const cases = document.querySelectorAll("#persons_table .col_chkbox input");
    // Étape 3 : vérifier si aucune case n'est cochée
    let selection = false;

   for (const une_case of cases) {

        if (une_case.checked) {
           selection = true;
        }
    }
   if (selection == false) {
        alert("Sélectionnez au moins une ligne !");
        return;
    }
   // Étape 4 : demander une confirmation
    if (confirm("Voulez-vous vraiment supprimer les lignes sélectionnées ?") == false) {
       return;
    }
    // Étape 5 : récupérer toutes les lignes du tableau
   const rows = table.tBodies[0].rows;
    // Étape 6 : parcourir les lignes de la dernière à la première
   // Cours : slide 44 (Boucle for)
  for (let i = rows.length - 1; i >= 0; i--) {
// Récupérer la checkbox de la ligne
const checkbox = rows[i].querySelector("input[type='checkbox']");
// Vérifier si la checkbox est cochée
        if (checkbox.checked) {
// Récupérer les points de la quatrième cellule
// Cours : slide 91 (innerText)
            const points = parseInt(rows[i].cells[3].innerText);
// Soustraire les points du total
         total_points = total_points - points;
// Décrémenter le nombre de lignes
        lignes = lignes - 1;
// Supprimer la ligne du tableau HTML
// Cours : slide 99 (remove)
         rows[i].remove();
            // Supprimer la personne du tableau persons
            // Cours : slide 38 (Tableaux)
 persons.splice(i, 1);
        }
  }
    // Étape 7 : afficher un message et actualiser le résumé
    alert("Suppression effectuée !");
    update_summary();
}
// Appeler init
init();