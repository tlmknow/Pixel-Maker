// Select color input
const pickColor = document.getElementById("colorPicker");
// Select size input
const table = document.getElementById("pixelCanvas");
const sizePicker = document.getElementById("sizePicker");

sizePicker.addEventListener("submit", function() {
	event.preventDefault();


	height = document.getElementById("inputHeight").value;
	width = document.getElementById("inputWidth").value;
	table.innerHTML = null;
	makeGrid(height, width);
});


// When size is submitted by the user, call makeGrid()

function makeGrid(height, width) {

//create row and columns
	for (r = 0; r <= height; r++) {
		let row = table.insertRow();
		for (c = 0; c <= width; c++) {
			let cell = row.insertCell()
			cell.addEventListener("click", function() {
//sets the background color for the selected cell
				cell.style.backgroundColor = pickColor.value;
			})
		}

	}
}

// Your code goes here!
