(function(){

  // Création d'une variable d'id pour différencier les vidéos
  var i = 1;

  // Fonction d'ajout de vidéos
  document.getElementById("ajouter").addEventListener("click", function() {

    //On récupère le lien de l'url
    var url = document.getElementById("url").value;

    //On récupère le tableau
    var tableau = document.getElementById("tableau");

    //On crée notre tableau avec ses colonnes et lignes
    var tr = document.createElement("tr");
    tr.setAttribute("id", "ligne" + i);

    var td = document.createElement("td");
    td.appendChild(document.createTextNode(url));

    var td2 = document.createElement("td");
    var button = document.createElement("button");
    button.setAttribute("type", "button");
    button.setAttribute("class", "btn btn-danger");
    button.setAttribute("id", "supprimer" + i);
    button.innerHTML = "Supprimer";
    td2.appendChild(button);

    //On ajoute les colonnes à la ligne
    tr.appendChild(td);
    tr.appendChild(td2);

    //On ajoute la ligne au tableau
    tableau.appendChild(tr);

    //On incrémente l'ID
    i++;
  });

  //Fonction de modification du bouton Play
  document.getElementById("play").addEventListener("click", function() {

    //On récupère l'élément
    var play = document.getElementById("play");

    //Si la valeure du bouton est égale à Play, on lui attribue pause, sinon l'inverse
    if(play.textContent == "Play") {
      play.textContent = "Pause";
    }
    else {
      play.textContent = "Play";
    }
  });

  //Fonction de vision du volume
  document.getElementById("volume").addEventListener("mousemove", function() {

    //On récupère la valeur du volume
    var volume = document.getElementById("volume").value;

    //On le fait apparaître lorsque la souris bouge pour que l'utilisateur est une parfaite vision de ce qu'il fait
    document.getElementById("valVolume").textContent = volume;
  });

  //Fonction de suppression
  document.getElementById("supprimer").addEventListener("click",function() {
    var supprimer = document.
  });
})();
