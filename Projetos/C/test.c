#include<stdio.h>

FILE *fp;
int a;

void main () {
  fp = fopen("test.txt", "r");
  printf("Casa atual %2c\n", fgetc(fp));
  printf("Digite quantas casas devo andar ou 9420 para sair\n");
  while (1) {
    scanf("%d", &a);
    fseek(fp, a, SEEK_CUR);
    printf("%2c\n", fgetc(fp));
    printf("%2d\n", a);
    if ( a == 9420 ) return;
  }

}
