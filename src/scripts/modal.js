//THE FOLLOWING CODE IS FOR THE MODAL WINDOW
/*
// Get the modal
var modal = document.getElementById("BaltimoreCityModal");

// Get the button that opens the modal
var county = document.getElementById("BaltimoreCity");
*/
// Get the <span> element that closes the modal
var span = document.querySelectorAll(".close");

var modal = "";
var county = "";

function clicked(clicked_id) {
  let tempcounty = clicked_id;
  let tempmodal = clicked_id + "Modal";
  county = document.getElementById(tempcounty);
  modal = document.getElementById(tempmodal);
  openmodal();
}

// When the user clicks on the button, open the modal
function openmodal() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal

span.forEach(function (element) {
  element.onclick = function () {
    modal.style.display = "none";
  };
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

//THE FOLLOWING CODE IS FOR THE COLLAPSIBLE MENUS IN THE MODAL WINDOW
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}
