// Déclarer la liste qui contiendra les données
var datalist = [];

// Récupérer les données

var xhr = new XMLHttpRequest();
xhr.open("GET", "movies.json");
xhr.onreadystatechange = function() {
  if(xhr.readyState == 4 && xhr.status == 200){
    datalist = JSON.parse(xhr.responseText);
    afficher(datalist);
  }
}
xhr.send();

// Fonction afficher() qui prend en paramètres une liste et l'affiche dans la table HTML
function afficher(datalist){
  var table = "";
  for (let i = 0; i < datalist.length; i++) {
    table += `
      <tr>
        <td><img src="${datalist[i].poster}" style="width:150px;"></td>
        <td>${datalist[i].titre}</td>
        <td>${datalist[i].réalisateur}</td>
        <td>${datalist[i].durée}</td>
        <td>${datalist[i].production}</td>
        <td>${datalist[i].festivals}</td>
        <td>${datalist[i].acteurs[0].prénom} ${datalist[i].acteurs[0].nom}; ${datalist[i].acteurs[0].nationalité} <br> ${datalist[i].acteurs[1].prénom} ${datalist[i].acteurs[1].nom}; ${datalist[i].acteurs[1].nationalité}</td>
      </tr>
      `;
  }
  document.querySelector("tbody").innerHTML = table;
}

// Search
document.getElementById('search').onkeyup = function(){
  var search= document.getElementById("search").value;
  var newDataList = datalist.filter(function(a){
    return a.titre.toLowerCase().includes(search.toLowerCase());
  });
  afficher(newDataList);
}

     ////////////////////////////////////
// items.sort((a, b) => a.value - b.value); TRI 
      document.getElementById('floatingSelect').onchange=function(){
      var  select= document.getElementById('floatingSelect').value;
        if (select=="Un titre") {
        datalist.sort((a, b) => a.titre.localeCompare(b.titre));
        afficher(datalist)
        }
        else if (select=="Grand titre"){
          datalist.sort((a, b) => b.titre.localeCompare(a.réalisateur));
          afficher(datalist)
        }

        else if (select=="Un réalisateur"){
        datalist.sort((a, b) => a.réalisateur.localeCompare(b.réalisateur));
        afficher(datalist)
      }
      else if (select=="Grand réalisateur"){
        datalist.sort((a, b) => b.réalisateur.localeCompare(a.réalisateur));
        afficher(datalist)
      }

      else if (select=="Une durée"){
        datalist.sort((a,b)=> a.durée - b.durée) 
        afficher(datalist)
      } 
      else if (select=="Grand duree"){
        datalist.sort((a,b)=> b.durée - a.durée) 
        afficher(datalist);
      } 
      
      else if (select=="L'année de production"){
        datalist.sort((a,b)=> a.production - b.production) 
        afficher(datalist);
      }

      else if (select=="Grand l'année de production"){
        datalist.sort((a,b)=> b.production - a.production) 
        afficher(datalist);
      }
}

    