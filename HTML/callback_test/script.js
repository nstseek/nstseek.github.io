function welcome(message) {
	console.log(message);
}

function testingCallback(callback){
	callback("EAE MEU CHEGADO");
}

testingCallback(welcome);