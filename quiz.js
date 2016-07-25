// var userHeight = 10;
// var userLeaf = "a";

// for(var i = 0; i < userHeight; i++){
//   console.log(userLeaf);
// }

var userHeight = document.getElementById("userHeight");
var userLeaf = document.getElementById("userLeaf");
var button = document.getElementById("treeGrown");

button.addEventListener("click", growTree);

  for (var i = 0; i < userHeight; i++){
    console.log(userLeaf);
  }


function growTree (clickEvent) {
  console.log(userHeight.value + " " + userLeaf.value);
}

