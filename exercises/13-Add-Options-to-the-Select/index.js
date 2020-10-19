window.onload = function() {
	console.log("The website was loaded...");
	let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];

	// your code here
	let mySelect = document.querySelector("#mySelect");
	function Selection() {
		for (let index in countries) {
			let selectCountry = document.createElement("option");
			selectCountry.innerHTML = countries[index];
			let valor = (selectCountry.value = countries[index]);
			mySelect.appendChild(selectCountry);
		}
	}
	mySelect.addEventListener("change", Selection());
};
