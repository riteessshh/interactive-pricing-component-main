// alert("working");
var slide = document.getElementById("myRange");
var output = document.getElementById("views");

output.innerHTML = slide.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slide.oninput = function() {
  output.innerHTML = this.value;
}
