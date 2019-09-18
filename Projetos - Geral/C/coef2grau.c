#include<stdio.h>
#include<math.h>

int a, b, c, x1, x2, delta;

int main () {
  printf("Calculadora de bháskara\nWritten by NSTSeek\nDigite os três coeficientes da função de segundo grau no formato a, b, c\n");
  scanf("%d, %d, %d", &a, &b, &c);
  delta = (b * b) - (4 * a * c);
  if (delta < 0) {
    printf("Não existem raízes reais pois o delta é negativo\n");
    return 0;
  }
  x1 = ((b * (-1)) + (sqrt(delta))) / (2 * a);
  x2 = ((b * (-1)) - (sqrt(delta))) / (2 * a);
  if (delta == 0) printf("A raíz que zera a função %dx² + %dx + %d é única pois delta vale 0\nEssa raíz vale %d\n", a, b, c, x1);
  else printf("Temos duas raízes que zeram a função %dx² + %dx + %d pois delta é maior que 0\nEssas raízes valem %d e %d\n", a, b, c, x1, x2);
}
