#include<stdio.h>

#define tamvetor 10

int i, vetor[tamvetor] = {0};

void main () {
  scanf("%d %d %d %d %d %d %d %d %d %d", &vetor[0], &vetor[1], &vetor[2], &vetor[3], &vetor[4], &vetor[5], &vetor[6], &vetor[7], &vetor[8], &vetor[9]);
  for ( i = 0 ; i < tamvetor ; i++ ) {
    if ( vetor[i] < 0 ) {
      printf("Número negativo inserido - o programa não trabalha com números negativos - encerrando...\n");
      return;
    }
  }
  while ( vetor[0] != 0 || vetor[1] != 0 || vetor[2] != 0 || vetor[3] != 0 || vetor[4] != 0 || vetor[5] != 0 || vetor[6] != 0 || vetor[7] != 0 || vetor [8] != 0 || vetor [9] != 0) {
    for ( i = 0 ; i < tamvetor ; i++) {
      if ( vetor[i] > 0 ) {
        printf("* ");
        vetor[i]--;
      }
      else if ( vetor[i] == 0 ) printf("  ");
    }
    printf("\n");
  }
}
