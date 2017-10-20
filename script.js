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
    var btnSuppr = document.createElement("button");
    btnSuppr.setAttribute("type", "button");
    btnSuppr.setAttribute("class", "btn btn-danger");
    btnSuppr.setAttribute("id", "supprimer" + i);
    btnSuppr.innerHTML = "Supprimer";
    td2.appendChild(btnSuppr);

    //On ajoute les colonnes à la ligne
    tr.appendChild(td);
    tr.appendChild(td2);

    //On ajoute la ligne au tableau
    tableau.appendChild(tr);

    //Fonction de suppression
   btnSuppr.addEventListener("click", function() {
      var btnId = this.getAttribute("id").substr(9);
      var ligne = document.getElementById("ligne" + btnId);
      ligne.parentNode.removeChild(ligne);
    });
    //On incrémente l'ID
    i++;
  });

  //Fonction de modification du bouton Play
  document.getElementById("play").addEventListener("click", function() {

    //On récupère l'élément
    var play = document.getElementById("play");
    var video = document.getElementById("lecteur");
    //Si la valeure du bouton est égale à Play, on lui attribue pause, sinon l'inverse
    if(play.textContent == "Play") {
      play.textContent = "Pause";
      video.play();
    }
    else {
      play.textContent = "Play";
      video.pause();
    }
  });

  //Fonction de vision du volume
  document.getElementById("volume").addEventListener("mousemove", function() {

    //On récupère la valeur du volume
    var volume = document.getElementById("volume").value;

    //On le fait apparaître lorsque la souris bouge pour que l'utilisateur est une parfaite vision de ce qu'il fait
    document.getElementById("valVolume").textContent = volume;

    document.getElementById("lecteur").volume = volume/100;
  });

})();
