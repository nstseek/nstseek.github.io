#include<stdio.h>

int x, y;

void main() {
  printf("Verificador de quadrante\nWritten by NSTSeek\nDigite as coordenadas de um ponto no formato x, y\n");
  scanf("%d, %d", &x, &y);
  if (x > 0 && y > 0) printf("O ponto se encontra no primeiro quadrante\n");
  else if (x > 0 && y < 0) printf("O ponto se encontra no quarto quadrante\n");
  else if (x < 0 && y > 0) printf("O ponto se encontra no segundo quadrante\n");
  else if (x < 0 && y < 0) printf("O ponto se encontra no terceiro quadrante\n");
  else if (x == 0 || y == 0) printf("O ponto se encontra sobre o eixo das abscissas ou sobre o eixo das ordenadas\n");
}
