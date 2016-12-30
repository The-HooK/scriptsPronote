var note = prompt('Quelle note désirez-vous ?');
var notes = document.getElementsByClassName('Texte10 AlignementDroit Gras');
var changed = 0;
for (i = 0; i < notes.length; i++) {
  if (notes[i].parentElement.parentElement.parentElement.style.backgroundColor != 'rgb(119, 113, 107)' && notes[i].innerText != unescape('%A0')) {
	  notes[i].innerText = note;
	  changed++;
	  }
}
console.log(changed + "notes changed.");
