#include<stdio.h>

int a, b, c, hip, cat1, cat2;

int main() {
  printf("Verificador de possibilidade de triângulo retângulo\nWritten by NSTSeek\nDigite os três lados do retângulo no formato a, b, c\n");
  scanf("%d, %d, %d", &a, &b, &c);
  if (a > b && a > c) {
    hip = a;
    cat1 = b;
    cat2 = c;
  }
  else if (b > a && b > c) {
    hip = b;
    cat1 = a;
    cat2 = c;
  }
  else if (c > a && c > b) {
    hip = c;
    cat1 = a;
    cat2 = b;
  }
  else {
    printf("Não existe um lado maior que os outros dois, portanto não é possível formar um triângulo retângulo\n");
    return 0;
  }

  if ((cat1*cat1) + (cat2*cat2) == (hip*hip)) printf("É possível formar um triângulo retângulo, tendo como catetos %d e %d e como hipotenusa %d\n", cat1, cat2, hip);
  else printf("Não foi possível formar um triângulo retângulo pois a soma dos quadrados dos 2 menores lados não é igual ao quadrado do maior lado\n");
}
