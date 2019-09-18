var div1 = document.getElementById("div1");
var div2 = document.getElementById("div2");
var h2 = document.querySelectorAll("h2");
var mode = 0;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function switchOpacity(){
	if(mode === 0){
		div1.className = "hidden";
		div2.className = "shown";
		mode = 1;
		h2[0].removeEventListener("mouseenter", switchOpacity);
		await sleep(1000);
		h2[1].addEventListener("mouseenter", switchOpacity);
	}
	else if(mode === 1){
		div2.className = "hidden";
		div1.className = "shown";
		mode = 0;
		h2[1].removeEventListener("mouseenter", switchOpacity);
		await sleep(1000);
		h2[0].addEventListener("mouseenter", switchOpacity);
	}
}

h2[0].addEventListener("mouseenter", switchOpacity);





