var userHeight = document.getElementById("userHeight");
var userLeaf = document.getElementById("userLeaf");
var button = document.getElementById("treeGrown");
button.addEventListener("click", growTree);
var spacer = '';

function growTree (clickEvent) {
  if (userLeaf.value === "" || userHeight.value === "")
    alert("You must specify a height and tree leaf!")
  for (var i = 0; i < userHeight.value; i++){
    console.log(userLeaf.value);
    spacer += 2;
  }
}


