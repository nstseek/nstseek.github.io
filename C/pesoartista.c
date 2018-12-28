#include<stdio.h>

float mercurio, venus, marte, lua, terra, jupiter, saturno, urano, netuno, plutao, peso;


void main () {
	printf("Conversor de peso para diferentes corpos celestes\nWritten by NSTSeek\nDigite o seu peso em kg:\n");
	scanf("%f", &peso);
	peso = peso * 9.8;
	mercurio = peso * 0.3649337410;
	venus = peso * 0.9041794087;
	marte = peso * 0.3812436289;
	lua = peso * 0.1651376146;
	terra = peso;
	jupiter = 2.6513761467;
	saturno = 1.1386340468;
	urano = peso * 1.0693170234;
	netuno = peso * 1.3606625891;
	plutao = peso * 0.2252803261;
	printf("Peso original: %f \nMercurio: %f \nVenus: %f\nMarte: %f\nLua: %f\nJupiter: %f\nSaturno: %f\nUrano: %f\nNetuno: %f\nPlutao: %f\n\nTerra: %f\n", peso, mercurio, venus, marte, lua, jupiter, saturno, urano, netuno, plutao, terra);
}
