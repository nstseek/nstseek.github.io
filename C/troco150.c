#include<stdio.h>

int troco, trocoorig, trocopago, notade110, notade50, notade10;

int main() {
    printf("Contador de troco com notas de 110, 50 e 10\n");
    printf("Written by NST Seek\n");
    printf("Digite o troco em numeros inteiros a ser dado:");
    scanf("%d", &troco);
    trocoorig = troco;
    notade110 = troco / 110;
    troco = troco % 110;
    notade50 = troco / 50;
    troco = troco % 50;
    notade10 = troco / 10;
    troco = troco % 10;
    trocopago = 110 * notade110 + 50 * notade50 + 10 * notade10;
    printf("De %d notas de 110, %d notas de 50 e %d notas de 10\nTroco pago: %d  Troco em debito: %d\n", notade110, notade50, notade10, trocopago, trocoorig - trocopago);
    return 0;
}
