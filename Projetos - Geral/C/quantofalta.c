#include<stdio.h>

int horas, minutos, segundos, segpass, diaemseg, segres, horasres, minutosres;

int main() {
    printf("Contador de segundos para o final do dia\n");
    printf("Written by NST Seek\n");
    printf("Digite as horas, minutos e segundos\n");
    scanf("%d:%d:%d", &horas, &minutos, &segundos);
    printf("Sao %d horas, %d minutos e %d segundos\n", horas, minutos, segundos);
    segpass = horas * 60 * 60 + minutos * 60 + segundos;
    diaemseg = 24 * 60 * 60;
    segres = diaemseg - segpass;
    horasres = segres / 3600;
    segres = segres % 3600;
    minutosres = segres / 60;
    segres = segres % 60;
    printf("Faltam %d horas, %d minutos e %d segundos para o fim do dia\n", horasres, minutosres, segres);
    getch();
    return 0;
}
