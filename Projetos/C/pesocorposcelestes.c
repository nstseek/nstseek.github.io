#include<stdio.h>

float mercurio, venus, marte, lua, terra, jupiter, saturno, urano, netuno, plutao, peso, forca;


void main () {
	printf("Conversor de peso para diferentes corpos celestes\nWritten by NSTSeek\nDigite o seu peso em kg:\n");
	scanf("%f", &peso);
	forca = peso * 9.8;
	mercurio = forca * 0.3649337410;
	venus = forca * 0.9041794087;
	marte = forca * 0.3812436289;
	lua = forca * 0.1651376146;
	terra = forca;
	jupiter = forca * 2.6513761467;
	saturno = forca * 1.1386340468;
	urano = forca * 1.0693170234;
	netuno = forca * 1.3606625891;
	plutao = forca * 0.2252803261;
	printf("Força original: %f \nMercurio: %f \nVenus: %f\nMarte: %f\nLua: %f\nJupiter: %f\nSaturno: %f\nUrano: %f\nNetuno: %f\nPlutao: %f\n\nTerra: %f\n", forca, mercurio, venus, marte, lua, jupiter, saturno, urano, netuno, plutao, terra);
}
