class user{

	constructor(name, age, city, province, country, phone){
		this.name = name;
		this.age = age;
		this.city = city;
		this.province = province;
		this.country = country;
		this.phone = phone;
	}

	getName(){
		return this.name;
	}

	getAge(){
		return this.age;
	}

	getCity(){
		return this.city;
	}

	getProvince(){
		return this.province;
	}

	getCountry(){
		return this.country;
	}

	getPhone(){
		return this.phone;
	}
}

var input = document.querySelectorAll("input");

function createNewUser(){
	var name = input[0].value;
	var age = input[1].value;
	var city = input[2].value;
	var province = input[3].value;
	var country = input[4].value;
	var phone = input[5].value;
	
	return new user(name, age, city, province, country, phone);
	
}

function sendData(){
	var newUser = createNewUser();

	document.getElementsByClassName("input-container")[0].className = "hide";

	if (newUser.getName() === "Rafael" || newUser.getName() === "rafael" || newUser.getName() === "RAFAEL"){
		document.querySelector("h2").innerHTML = "Voce criou este site!<br>Aqui estao os seus dados";
		document.querySelector("body").style.backgroundColor = "green";
	}
	else {
		document.querySelector("h2").innerHTML = "Voce nao criou este site!<br>Este site foi criado por Rafael<br>Aqui estao os seus dados";
		document.querySelector("body").style.backgroundColor = "red";
	}

	document.querySelector("table").className = "validated";
	var td = document.querySelectorAll("td");
	td[1].innerHTML = newUser.name;
	td[3].innerHTML = newUser.age;
	td[5].innerHTML = newUser.city;
	td[7].innerHTML = newUser.province;
	td[9].innerHTML = newUser.country;
	td[11].innerHTML = newUser.phone;

}

var button = document.querySelector("button");

button.addEventListener("click", sendData);
