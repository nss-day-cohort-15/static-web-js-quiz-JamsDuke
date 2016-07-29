var button = document.getElementById("treeGrown");
button.addEventListener("click", growTree);

function enter(e) {
  if (13 == e.keyCode) {
    growTree()
  }
}
document.addEventListener("keydown", enter);

var treeObj = {};

function tree(){
  treeObj.userHeight = document.getElementById("userHeight").value;
  treeObj.userLeaf = document.getElementById("userLeaf").value;
}

function growTree(){
  tree();
  if (treeObj.userLeaf === "" || treeObj.userHeight === "") {
    alert("You must specify a height and tree leaf!")
  }
var growth = 1;
  for (var i = 0; i < treeObj.userHeight; i++){
    console.log(" ".repeat(treeObj.userHeight-i) + treeObj.userLeaf.repeat(growth));
    growth += 2;
  }
}