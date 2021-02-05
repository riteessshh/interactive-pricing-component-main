// alert("working");
var slide = document.getElementById("myRange");
var output = document.getElementById("views");
var checks = "0";

output.innerHTML = slide.value; // Display the default slider value


// Update the current slider value (each time you drag the slider handle)
slide.oninput = function() {
  output.innerHTML = this.value;

  var outputs = output.innerHTML;

  switch (outputs) {
    case "10":
      document.getElementById("money").innerHTML = "8.00";
      break;
    case "50":
      document.getElementById("money").innerHTML = "12.00";
      break;
    case "100":
      document.getElementById("money").innerHTML = "16.00";
      break;
    case "500":
      document.getElementById("money").innerHTML = "24.00";
      break;
    case "1000":
      document.getElementById("money").innerHTML = "36.00";
      break;
    default:
      // document.getElementById("money").innerHTML = "16.00";

  }
}
