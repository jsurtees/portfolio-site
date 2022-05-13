document.getElementById("defaultOpen").click();

var activeTabName = "preview";

function numberUp()
{
var columns=parseInt(document.getElementById("numberColumns").textContent);

var a=columns;

var x=a+1;

  if (columns==20) {
    document.getElementById("numberColumns").textContent=a;
  }
  else {
    document.getElementById("numberColumns").textContent=x;
  }
  document.getElementById("numberColumns").textContent=x;
}

function numberDown()
{
  var columns=parseInt(document.getElementById("numberColumns").textContent);

  var a=columns;

  var x=a-1;

  if (columns==2) {
    document.getElementById("numberColumns").textContent=a;
  }
  else {
    document.getElementById("numberColumns").textContent=x;
  }
}

function calculateColumns()
{

  // Capture values entered in forms
  var m_columns = parseInt(document.getElementById("numberColumns").textContent);
  var m_artboard = parseInt(document.getElementById("artboard-value-input").value);
  var m_gutter = parseInt(document.getElementById("gutter-value-input").value);

  // Set input to 0 when no characters entered
  if (isNaN(m_artboard)){
    m_artboard = 0;
  }
  if (isNaN(m_gutter)){
    m_gutter = 0;
  }

  // Math
  var x = m_artboard-(m_gutter*(m_columns-1)); // Calc width minus gutters
  var calcCol = x / m_columns; // Calc col width
  var calc16x9 = calcCol / 1.777777; // Calc 16x9 height
  var calc2x3 = calcCol / 0.666666; // Calc 2x3 height
  var calc4x3 = calcCol / 1.333333; // Calc 2x3 height

  // Round numbers down
  calcCol = Math.floor(calcCol);
  calc16x9 = Math.floor(calc16x9);
  calc2x3 = Math.floor(calc2x3);

  // Apply calculations to text throughout page

  // Column Width
  x = document.getElementsByClassName("calcWidth");  // Find the element
  for(var i = 0; i < x.length; i++){
    x[i].innerText=calcCol;    // Change the content
  }

  // 16x9 Height
  x = document.getElementsByClassName("calc16x9");  // Find the element
  for(var i = 0; i < x.length; i++){
    x[i].innerText=calc16x9;    // Change the content
  }

  // 2x3 Height
  x = document.getElementsByClassName("calc2x3");  // Find the element
  for(var i = 0; i < x.length; i++){
    x[i].innerText=calc2x3;    // Change the content
  }

  // Gets the div "preview" to clear and give new columns
  var preview = document.getElementById(activeTabName);

  // Calculate column percentages for generating preview
  var calcColPercent = calcCol / m_artboard * 100;
  var calcGutPercent = m_gutter / m_artboard * 100;

  // Clears preview
  while (preview.firstChild) {
    preview.removeChild(preview.firstChild);
  }

  // Create string to add to columns
  var colString = "";

  if (activeTabName == "preview"){
    colString = calcCol;
  } else if (activeTabName == "preview-16x9") {
    colString = calcCol + " x " + calc16x9;
  } else {
    colString = calcCol + " x " + calc2x3;
  }

  // Generates columns for the preview
  for (var i = 0; i < m_columns; i++) {

    // Create columns
    var newCol = document.createElement('div'); // Create new div
    newCol.id = "col-"+(i+1); // Give it unique id
    newCol.className = "previewCol"; // Give it consistent class for styling
    newCol.style.width = calcColPercent+"%"; // Set width
    newCol.innerHTML = "<div class='asset'><p>"+colString+"</p></div>"; // Set column text to be calculated value
    preview.appendChild(newCol); // Add the column to the preview

    // Create gutter columns
    var newGut = document.createElement('div');
    newGut.id = "gut-"+(i+1);
    newGut.className = "previewGut";
    newGut.style.width = calcGutPercent+"%";
    preview.appendChild(newGut); 
    
  }


  // http://dummyimage.com/400x255/6fb2ff/ffffff.jpg

  var a = document.getElementById('download16x9'); //or grab it by tagname etc
  a.href = "http://dummyimage.com/"+calcCol+"x"+calc16x9+"/6fb2ff/ffffff.jpg";

  a = document.getElementById('download2x3'); //or grab it by tagname etc
  a.href = "http://dummyimage.com/"+calcCol+"x"+calc2x3+"/6fb2ff/ffffff.jpg";


}

function showPreview(evt, prevDisplay) {
  // Declare all variables
  var i, tabcontent, tablinks;
  activeTabName = prevDisplay;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(prevDisplay).style.display = "block";
  evt.currentTarget.className += " active";

  calculateColumns();

}

window.onload = calculateColumns();






