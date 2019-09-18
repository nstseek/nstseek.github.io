var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var generate = document.querySelector("#gen");
var stopButton = document.querySelector("#stop");
var h1 = document.querySelector("h1");
var h2 = document.querySelector("h2");
var h3 = document.querySelector("h3");

setGradient();

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";

	verifyColors();
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function backgroundGenerator() {
	var colorsL = [(Math.random() * 1000) % 256, (Math.random() * 1000) % 256, (Math.random() * 1000) % 256];
	for(var i = 0 ; i < 3 ; i++){
		colorsL[i] -= colorsL[i] % 1;
	}
	
	var colorsR = [(Math.random() * 1000) % 256, (Math.random() * 1000) % 256, (Math.random() * 1000) % 256];
	for(var i = 0 ; i < 3 ; i++){
		colorsR[i] -= colorsR[i] % 1;
	}

	var LcolorString = String(colorsL[0]) + ", " + String(colorsL[1]) + ", " + String(colorsL[2]);
	var RcolorString = String(colorsR[0]) + ", " + String(colorsR[1]) + ", " + String(colorsR[2]);

	var temp = "linear-gradient(to right, rgb(" + LcolorString + "), rgb(" + RcolorString + "))";

	return colorsL.concat(colorsR);
}

async function continueBackgroundGenerator() {
	while(true) {
		var stop = 0;
		function stopEvent(){
			stop = 1;	
		}
		stopButton.addEventListener("click", stopEvent);
		var newColors = backgroundGenerator();
		var actualColors = getActualValues();
		while (true){
			if (stop === 1){
				return;
			}
			if (actualColors[0] < newColors[0]){
				actualColors[0]++;
			}
			if (actualColors[0] > newColors[0]){
				actualColors[0]--;
			}
			if (actualColors[1] < newColors[1]){
				actualColors[1]++;
			}
			if (actualColors[1] > newColors[1]){
				actualColors[1]--;
			}
			if (actualColors[2] < newColors[2]){
				actualColors[2]++;
			}
			if (actualColors[2] > newColors[2]){
				actualColors[2]--;
			}
			if (actualColors[3] < newColors[3]){
				actualColors[3]++;
			}
			if (actualColors[3] > newColors[3]){
				actualColors[3]--;
			}
			if (actualColors[4] < newColors[4]){
				actualColors[4]++;
			}
			if (actualColors[4] > newColors[4]){
				actualColors[4]--;
			}
			if (actualColors[5] < newColors[5]){
				actualColors[5]++;
			}
			if (actualColors[5] > newColors[5]){
				actualColors[5]--;
			}
			if (actualColors[0] === newColors[0] && actualColors[1] === newColors[1] && actualColors[2] === newColors[2] && actualColors[3] === newColors[3] && actualColors[4] === newColors[4] && actualColors[5] === newColors[5]){
				break;
			}

			await sleep(10);

			var LcolorString = String(actualColors[0]) + ", " + String(actualColors[1]) + ", " + String(actualColors[2]);
			var RcolorString = String(actualColors[3]) + ", " + String(actualColors[4]) + ", " + String(actualColors[5]);

			var temp = "linear-gradient(to right, rgb(" + LcolorString + "), rgb(" + RcolorString + "))";

			body.style.background = temp;

			css.textContent = body.style.background + ";";

			var color1temp;

			if (actualColors[0] < 16){
				color1temp = "#0" + actualColors[0].toString(16); 
			}
			else {
				color1temp = "#" + actualColors[0].toString(16);
			}
			if (actualColors[1] < 16){
				color1temp = color1temp + "0" + actualColors[1].toString(16);
			}
			else{
				color1temp = color1temp + actualColors[1].toString(16);
			}
			if (actualColors[2] < 16){
				color1temp = color1temp + "0" + actualColors[2].toString(16);
			}
			else{
				color1temp = color1temp + actualColors[2].toString(16);
			}

			var color2temp;

			if (actualColors[3] < 16){
				color2temp = "#0" + actualColors[3].toString(16); 
			}
			else {
				color2temp = "#" + actualColors[3].toString(16);
			}
			if (actualColors[4] < 16){
				color2temp = color2temp + "0" + actualColors[4].toString(16);
			}
			else{
				color2temp = color2temp + actualColors[4].toString(16);
			}
			if (actualColors[5] < 16){
				color2temp = color2temp + "0" + actualColors[5].toString(16);
			}
			else{
				color2temp = color2temp + actualColors[5].toString(16);
			}
			
			color1.value = color1temp;
			color2.value = color2temp;

			verifyColors();
		}
	}
}

function verifyColors() {
	var actualColors = getActualValues();
	if (actualColors[0] < 50 && actualColors[1] < 50 && actualColors[2] < 50 && actualColors[3] < 50 && actualColors[4] < 50 && actualColors[5] < 50){
		h1.style.color = "rgba(255,255,255,.5)";
		h2.style.color = "rgba(255,255,255,.5)";
		h3.style.color = "rgba(255,255,255,.5)";
	}
	else{
		h1.style.color = "rgba(0,0,0,.5)";
		h2.style.color = "rgba(0,0,0,.5)";
		h3.style.color = "rgba(0,0,0,.5)";
	}
	
}

function getActualValues(){

	var actualColors;

	actualColors = body.style.background;

	actualColors = actualColors.slice(actualColors.indexOf("rgb(") + 4);

	var rgbsize = 0;

	while (true){
		if (actualColors[rgbsize] === ')'){
			break;
		}
		else {
			rgbsize++;
		}
	}

	var LColorsArray_updated = actualColors.slice(0, rgbsize).split(",");

	LColorsArray_updated[0] = Number(LColorsArray_updated[0]);
	LColorsArray_updated[1] = Number(LColorsArray_updated[1]);
	LColorsArray_updated[2] = Number(LColorsArray_updated[2]);

	actualColors = actualColors.slice(actualColors.indexOf("rgb(") + 4);

	rgbsize = 0;

	while (true){
		if (actualColors[rgbsize] === ')'){
			break;
		}
		else {
			rgbsize++;
		}
	}

	var RColorsArray_updated = actualColors.slice(0, rgbsize).split(",");

	RColorsArray_updated[0] = Number(RColorsArray_updated[0]);
	RColorsArray_updated[1] = Number(RColorsArray_updated[1]);
	RColorsArray_updated[2] = Number(RColorsArray_updated[2]);

	var colorsArray_updated = LColorsArray_updated.concat(RColorsArray_updated);

	return colorsArray_updated;
}

generate.addEventListener("click", continueBackgroundGenerator);

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);