// Création de la nouvelle case "Elève"
var moyennes = document.getElementById('GInterface.Instances[1].Instances[1]_Page').firstChild.firstChild.firstChild.firstChild.firstChild;
var td = moyennes.children[1].children[0];
var newTd = td.cloneNode(true);
newTd.firstChild.innerText = 'Elève';
td.parentNode.appendChild(newTd);

moyennes.firstChild.children[2].colSpan++;
// La case "moyennes" englobe maitenant 1 colonne en +

// Pour centrer "Moyennes"
moyennes.firstChild.children[2].firstChild.style.width = '';

var lignes = document.getElementById('GInterface.Instances[1].Instances[1]_Contenu_1').firstChild.children;

// Pour chaque ligne (matière) :
for (i = 0; i < lignes.length; i++) {
  var ds = lignes[i].children;
  var numerateur = 0;
  var denominateur = 0;
  var moyenne = 0;
  
  // Pour chaque ds
  for (j = 0; j < ds.length; j++) {
    
    if (ds[j].firstChild.firstChild.children.length == 4) {
      var note = parseFloat(ds[j].firstChild.firstChild.children[3].firstChild.innerText.replace(',', '.'));
      if (ds[j].firstChild.firstChild.children[3].firstChild.children[0] !== undefined) {
        var bareme = ds[j].firstChild.firstChild.children[3].firstChild.children[0].innerText.substring(2, this.lentgh);
        note = (note / bareme) * 20;
      }
      var coef = ds[j].firstChild.firstChild.children[2].firstChild.innerText;
      coef = parseFloat(coef.substring(6, coef.length).replace(',', '.'));
    } 
    else {
      var note = parseFloat(ds[j].firstChild.firstChild.children[2].firstChild.innerText.replace(',', '.'));
      if (ds[j].firstChild.firstChild.children[2].firstChild.children[0] !== undefined) {
        var bareme = ds[j].firstChild.firstChild.children[2].firstChild.children[0].innerText.substring(2, this.lentgh);
        note = (note / bareme) * 20;
      }
      var coef = ds[j].firstChild.firstChild.children[1].firstChild.innerText;
      coef = parseFloat(coef.substring(6, coef.length).replace(',', '.'));
    }
    if (!isNaN(note)) {
      if (isNaN(coef)) {
        numerateur += note;
        denominateur++;
      } 
      else {
        numerateur += note * coef;
        denominateur += coef
      }
    }
  }
  
  // Calcul de la moyenne
  moyenne = (numerateur / denominateur).toFixed(2);
  if (isNaN(moyenne))
  moyenne = '';
  
  // Création de la case avec la moyenne de la ligne "i"
  var td = document.getElementById('GInterface.Instances[1].Instances[1]_Contenu_0').firstChild.children[i].children[3];
  var newTd = td.cloneNode(true);
  newTd.firstChild.firstChild.children[2].firstChild.innerText = moyenne;
  td.parentNode.appendChild(newTd);
}

document.getElementById('GInterface.Instances[1].Instances[1]_Contenu_0').parentNode.style.width = '';
