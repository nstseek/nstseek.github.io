#include<stdio.h>
#include<math.h>

float altura, distancia;

int main () {
    printf("Medidor da sua distancia ate o famoso horizonte\n");
    printf("Written by NST Seek\n");
    printf("Digite a altura em que voce se encontra tendo como referencia o nivel do mar:\n");
    scanf("%f", &altura);
    distancia = sqrt((altura * altura)+ 2.0 * 6378150.0 * altura);
    printf("Sua altura em relacao ao nivel do mar: %f   Sua distancia ate o famoso horizonte: %f\n", altura, distancia);
    return 0;
}
