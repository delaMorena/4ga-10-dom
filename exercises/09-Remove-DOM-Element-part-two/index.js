let list = document.querySelector("#parentLI"); // Get the <ul> element with id="myList"
let childs = list.childNodes;
console.log(childs);
list.removeChild(list.childNodes[3]); // Remove <ul>'s first child node (index 0)
console.log(list);
console.log(childs);
