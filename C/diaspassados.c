#include<stdio.h>

int dia, mes, ano, diaspass;

void main () {
  printf("Contador de dias passados\nWritten by NSTSeek\nEntre com a data e o ano de 4 dígitos no formato dd/mm/aaaa\n");
  scanf("%d/%d/%d", &dia, &mes, &ano);
  diaspass = dia;
  switch (mes) {
    case 12: diaspass += 30;
    case 11: diaspass += 31;
    case 10: diaspass += 30;
    case 9: diaspass += 31;
    case 8: diaspass += 31;
    case 7: diaspass += 30;
    case 6: diaspass += 31;
    case 5: diaspass += 30;
    case 4: diaspass += 31;
    case 3: if (ano % 4 == 0 && ano % 100 == 0) {
      if (ano % 400 == 0) diaspass += 29;
      else diaspass += 28;
    }
    else if (ano % 4 == 0 && ano % 100 != 0) {
      diaspass += 29;
    }
    else diaspass += 28;
    case 2: diaspass += 31;
    case 1: break;
  }
  printf("Se passaram %d dias desde o início do ano\n", diaspass);
}
