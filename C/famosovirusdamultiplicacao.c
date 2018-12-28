#include<stdio.h>

int a, b, signal, result;
//se signal for 1 é positivo, se for -1 é negativo
void main () {
  printf("Programa que já foi criado com vírus segundo o prof pq eu so bom no bagulho\nWritten by NSTSeek\nDigite dois números no formato a, b\n");
  scanf("%d, %d", &a, &b);
  if (a < 0 && b < 0 || a > 0 && b > 0) signal = 1;
  else if(a < 0 && b > 0 || b < 0 && a > 0) signal = -1;
  if (a < 0) a = a - a - a;
  if (b < 0) b = b - b - b;
  result = a * b;
  if (signal == -1) result = result - result - result;
  printf("O resultado é %d\nO sinal vale %d\n", result, signal);
}
