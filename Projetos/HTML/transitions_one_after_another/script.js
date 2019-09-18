var h2 = document.querySelector("h2");
var mode = 0;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function hideAndChange() {
	h2.className = "hidden";
	await sleep(500);
	if (mode === 0){ 
		h2.innerHTML = "O hover event (embora não tenha esse nome, mas sim se chame mouseenter) consiste no mouse passar em cima de um elemento, podendo dar um trigger em alguma função de javascript usando o mouse, função esta que deverá realizar a transição suave dos textos com a ajuda do CSS/HTML5";
		mode = 1;
	}
	else {
		h2.innerHTML = "Este site foi criado para testar o hover event de js, combinando com uma transição";
		mode = 0;
	}
	h2.className = "shown";
}

h2.addEventListener("mouseenter", hideAndChange);



