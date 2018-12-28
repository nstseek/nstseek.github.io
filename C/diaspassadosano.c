#include<stdio.h>

int dia, mes, ano, dia_old, mes_old, ano_old, diaspass_old, anopass_old, mespass_old, diaspass, anopass, mespass, mes_full, t, result;

void main () {
  printf("Contador de dias passados - anos diferentes\nWritten by NSTSeek\nEntre com a data e o ano atual de 4 dígitos no formato dd/mm/aaaa\n");
  scanf("%d/%d/%d", &dia, &mes, &ano);
  printf("Entre com a data e o ano passado de 4 dígitos no formato dd/mm/aaaa\n");
  scanf("%d/%d/%d", &dia_old, &mes_old, &ano_old);
  mes_full = 12;
  t = 0;
  //somando os dias de anos passados até a data antiga
  while(t < (ano_old-1)){
    t++;
    diaspass_old += 31;
    // somando dezembro
    switch (mes_full) {
      case 12: diaspass_old += 30;
      case 11: diaspass_old += 31;
      case 10: diaspass_old += 30;
      case 9: diaspass_old += 31;
      case 8: diaspass_old += 31;
      case 7: diaspass_old += 30;
      case 6: diaspass_old += 31;
      case 5: diaspass_old += 30;
      case 4: diaspass_old += 31;
      case 3: if (ano % 4 == 0 && ano % 100 == 0) {
        if (ano % 400 == 0) diaspass_old += 29;
        else diaspass_old += 28;
      }
      else if (ano % 4 == 0 && ano % 100 != 0) {
        diaspass_old += 29;
      }
      else diaspass_old += 28;
      case 2: diaspass_old += 31;
      case 1: break;

    }
  }
  diaspass = diaspass_old;
  //somando os dias de anos passados até agora
  while(t < (ano-1)){
    t++;
    diaspass += 31;
    // somando dezembro
    switch (mes_full) {
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
  }
  //somando os dias dos meses passados ao total de dias desde o ano 0 até a data antiga
  switch (mes_old) {
    case 12: diaspass_old += 30;
    case 11: diaspass_old += 31;
    case 10: diaspass_old += 30;
    case 9: diaspass_old += 31;
    case 8: diaspass_old += 31;
    case 7: diaspass_old += 30;
    case 6: diaspass_old += 31;
    case 5: diaspass_old += 30;
    case 4: diaspass_old += 31;
    case 3: if (ano % 4 == 0 && ano % 100 == 0) {
      if (ano % 400 == 0) diaspass_old += 29;
      else diaspass_old += 28;
    }
    else if (ano % 4 == 0 && ano % 100 != 0) {
      diaspass_old += 29;
    }
    else diaspass_old += 28;
    case 2: diaspass_old += 31;
    case 1: break;

  }
  //somando os dias dos meses atuais ao total de dias desde o ano 0 até agora
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
  //somando os dias passados do mes da data antiga aos dias antigos passados
  diaspass_old += dia_old;
  //somando os dias passados do mes atual aos dias passados totais
  diaspass += dia;
  result = diaspass - diaspass_old;
  printf("Dias passados até hoje %d\nDias passados até a data antiga %d\nDiferença de dias %d\n", diaspass, diaspass_old, result);
}
