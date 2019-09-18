#include<stdio.h>

int a, b, c;

void main () {
  printf("Verificador de ordem de números\nDigite três números no formato a, b, c\n");
  scanf("%d, %d, %d", &a, &b, &c);
  if ( a < b && b < c) printf("Os números estão em ordem crescente\n");
  else printf("Os números não estão em ordem crescente\n");
}
