let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	let list = document.createElement("li");
	list.innerHTML = "Forth element";
	let myList = document.querySelector("#myList");
	myList.appendChild(list);
});
