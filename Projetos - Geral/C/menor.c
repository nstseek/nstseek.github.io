#include<stdio.h>

int a,b;

void main () {
	printf("Comparador de números - selecionando o menor deles\nDigite dois números no formato x, y\n");
	scanf("%d, %d", &a, &b);
	if (a > b) printf("O menor número é: %d\n", b);
	else if (a < b) printf("O menor número é: %d\n", a);
	else printf("Os números são iguais\n");
}
