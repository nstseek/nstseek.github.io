#include<stdio.h>
#define TAM 10

void funcao1 ( int x[TAM] ) { // Vetor dimensionado
  int i;
  for ( i = 9 ; i >= 0 ; i-- ) x[i] = 9-i;
}
void funcao2 ( int x[] ) { // Vetor nao-dimensionado
  int i;
  for ( i = 0 ; i < TAM ; i++ ) printf("vetor[%d] = %d \n", i, x[i]);
}
int main ( ) {
  int v[TAM];
  funcao1(v);
  funcao2(v);
  return 0;
}
