#include<stdio.h>

void main () {
  int i;
  int quit = 0;
  int counter = 0;
  int nelem = 0;

  scanf("%d", &nelem);
  int elem[nelem];
  for ( i = 0; i < nelem ; i++ )
    scanf("%d", &elem[i]);
  for ( i = 0; i < nelem ; i++ ) //deve ser removido
    printf("%d ", elem[i]);
  printf("\n", elem[i]);
  while(quit == 0){
    for ( i = 0 ; i < nelem - 1 ; i++) {
      if ( elem[i] > elem[i+1]) {
        int aux = elem[i];
        elem[i] = elem[i+1];
        elem[i+1] = aux;
      }
      for ( i = 0; i < nelem ; i++ ) //deve ser removido
        printf("%d ", elem[i]);
      printf("reorganizando array\n");
    }
    /*for ( i = 0 ; i < nelem-1 ; i++ ){
      if ( elem[i] < elem[i+1] ) counter++;
      else counter = 0;
    }
    if (counter == nelem-1) quit = 1;*/
  }
  for ( i = 0; i < nelem ; i++ ) //deve ser removido
    printf("%d", elem[i]);
}
