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

function createNewUser(){
	var name = prompt("Enter your name");
	var age = prompt("Your age");
	var city = prompt("Your city");
	var province = prompt("Your province");
	var country = prompt("Your country");
	var phone = prompt("Your phone");

	return new user(name, age, city, province, country, phone);
	
}

var newUser = createNewUser();

if (newUser.name === "Rafael" || newUser.name === "rafael" || newUser.name === "RAFAEL"){
	document.querySelector("h2").innerHTML = "Voce criou este site!<br>Aqui estao os seus dados";
	document.querySelector("body").style.backgroundColor = "green";
}
else {
	document.querySelector("h2").innerHTML = "Voce nao criou este site!<br>Este site foi criado por Rafael<br>Aqui estao os seus dados";
	document.querySelector("body").style.backgroundColor = "red";
}

document.querySelector("div").className = "showTable";
document.querySelector("table").className = "validated";
var td = document.querySelectorAll("td");
td[1].innerHTML = newUser.name;
td[3].innerHTML = newUser.age;
td[5].innerHTML = newUser.city;
td[7].innerHTML = newUser.province;
td[9].innerHTML = newUser.country;
td[11].innerHTML = newUser.phone;