(function(){

  // Création d'une variable d'id pour différencier les alarmes
  var i = 1;

  // Fonction d'ajout d'alarmes
  document.getElementById("ajouter").addEventListener("click", function() {
    var url = document.getElementById("url").value;
    var ul = document.getElementById("liste");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(url));
    li.setAttribute("class", "list-group-item");
    li.setAttribute("id", "item" + i);
    ul.appendChild(li);
    i++;
  });

  document.getElementById("play").addEventListener("click", function() {
    var play = document.getElementById("play");
    if(play.textContent == "Play") {
      play.textContent = "Pause";
    }
    else {
      play.textContent = "Play";
    }
  });


})();
