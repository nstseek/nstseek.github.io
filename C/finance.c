#include<stdio.h>

float montante, capitalinicial, juros, rendimento, valordesejado, incremento = 0;
int tempo, i, mode = 0;

void main() {
printf("Calculadora de finanças\nWritten by NSTSeek\nDigite o modo desejado\n1 - Quando terei um milhão?\n2 - Calculadora de poupança\n");
scanf("%d", &mode);
  if (mode == 2) {
    printf("Digite o seu capital inicial, seu incremento, seus juros, sendo juros < 1 e o tempo desejado em meses no formato C, I, J, T\n");
    scanf("%f, %f, %f, %d", &capitalinicial, &incremento, &juros, &tempo);
    montante = capitalinicial;
    for (i = 0; i < tempo; i++) {
      montante = montante + incremento;
      montante = montante * (juros + 1);
      rendimento = montante - capitalinicial - incremento * (i+1);
      printf("Mês atual: %d   Grana atual: R$%.2f   Lucro atual: R$%.2f\n\n", (i+1), montante, rendimento);
    }
  }
  if (mode == 1) {
    printf("Digite o seu capital inicial, seu incremento seus juros, sendo juros < 1 e o valor desejado no formato C, I, J, V\n");
    scanf("%f, %f, %f, %f", &capitalinicial, &incremento, &juros, &valordesejado);
    montante = capitalinicial;
    while(montante < valordesejado) {
      montante = montante + incremento;
      montante = montante * (juros + 1);
      rendimento = montante - capitalinicial - incremento * (i+1);
      printf("Mês atual: %d   Grana atual: R$%.2f   Lucro atual: R$%.2f\n\n", (i+1), montante, rendimento);
      i++;
    }
  }

}
