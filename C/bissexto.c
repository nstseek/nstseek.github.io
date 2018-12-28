#include<stdio.h>

int ano;

void main () {
  printf("Verificador de ano bissexto\nWritten by NSTSeek\nDigite o seu ano\n");
  scanf("%d", &ano);
  if (ano % 4 == 0 && ano % 100 == 0) {
    if (ano % 400 == 0) printf("É bissexto\n");
    else printf("Não é bissexto\n");
  }
  else if (ano % 4 == 0 && ano % 100 != 0) {
    printf("É bissexto\n");
  }
  else printf("Não é bissexto\n");
}
