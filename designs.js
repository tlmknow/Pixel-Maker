// Select color input
const pickColor = document.getElementById("colorPicker");
// Select size input
const table = document.getElementById("pixelCanvas");
const sizePicker = document.getElementById("sizePicker");

sizePicker.addEventListener("submit", (event) => {
	event.preventDefault();


	let height = document.getElementById("inputHeight").value;
	let width = document.getElementById("inputWidth").value;
	table.innerHTML = null;
	makeGrid(height, width);
});


// When size is submitted by the user, call makeGrid()

function makeGrid(height, width) {


	for (i = 0; i <= height; i++) {
		let row = table.insertRow();
		for (j = 0; j <= width; j++) {
			let cell = row.insertCell()
			cell.addEventListener("click", (e) => {

				cell.style.backgroundColor = pickColor.value;
			})
		}

	}
}

// Your code goes here!
