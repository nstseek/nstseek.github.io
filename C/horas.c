#include<stdio.h>

int horas, minutos, segundos, segundospassados, horasres, minutosres, segundosres;

int main() {
    printf("Contador de segundos desde o inicio do dia\n");
    printf("Written by NST Seek\n");
    printf("Digite as horas, minutos e segundos\n");
    scanf("%d:%d:%d", &horas, &minutos, &segundos);
    printf("Sao %d horas, %d minutos e %d segundos\n", horas, minutos, segundos);
    segundospassados = horas * 60 * 60 + minutos * 60 + segundos;
    printf("Ja se passaram %d segundos desde o inicio do dia\n", segundospassados);
    return 0;
}
