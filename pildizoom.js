// Järgnev osa ja skript on piltide suurelt vaatamiseks
// Koodi allikas: https://stackoverflow.com/questions/47798971/several-modal-images-on-page
// Looge viited modaalaknale...
var modal = document.getElementById('myModal');
// ...kõigile piltidele -- pane tähele, et kasutan klassi!
var images = document.getElementsByClassName('myImages');
// Pilt modaalaknas
var modalImg = document.getElementById("img01");
// ...ja pealdis modaalaknas
var captionText = document.getElementById("caption");

// Käime läbi kõik pildid, mis on meie kohandatud klassiga
for (var i = 0; i < images.length; i++) {
  var img = images[i];
  // ...ja lisame sellele pildile klikkimise kuulari.
  img.onclick = function(evt) {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}
