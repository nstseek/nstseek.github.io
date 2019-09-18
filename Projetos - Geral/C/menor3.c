#include<stdio.h>

int a, b, c, menor;

void main () {
	printf("Comparador de números - selecionando o menor deles\nWritten by NSTSeek\nDigite três números no formato a, b, c\n");
	scanf("%d, %d, %d", &a, &b, &c);
	//if (a == b || a == c || b == c) printf("Dois números são iguais\n");
	if (a >= b) menor = b;
	else menor = a;
	if (c < menor) menor = c;

	printf("O menor número é: %d\n", menor);
}
