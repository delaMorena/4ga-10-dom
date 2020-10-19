let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	console.log("click");
	let h1 = document.createElement("h1");
	h1.innerHTML = "Hello World";
	h1.style.background = "yellow";
	document.body.appendChild(h1);
});
