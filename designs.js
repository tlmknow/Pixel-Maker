// Select color input
const pickColor = document.getElementById("colorPicker");
// Select size input
const table = document.getElementById("pixelCanvas");
const sizePicker = document.getElementById("sizePicker");
const height = document.getElementById("inputHeight");
const width = document.getElementById("inputWidth");

/*The code below saves the input when submit button is clicked,
  prevents submit button from resubmitting input
	and displays the body of the table
*/
sizePicker.addEventListener("submit", function() {
	event.preventDefault();
	table.innerHTML = null;
	makeGrid(height, width);
});


// When size is submitted by the user, call makeGrid()

function makeGrid() {
	// Your code goes here!

//Creates rows and cells
	for (var r = 0; r <= height.value; r++) {
		let row = table.insertRow();
		for (var c = 0; c <= width.value; c++) {
			let column = row.insertCell();
			//sets the background color for the selected cell
			column.addEventListener("click", function() {
      column.style.backgroundColor = pickColor.value;
		});
		}

	}
}
