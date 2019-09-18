#include<stdio.h>

void main () {
  enum carros {
    ferrari = 0,
    porsche = 1,
    audi = 2,
    bmw = 3,
    mclaren = 4,
    lamborghini = 5,
  };
  enum carros meucarro;
  enum carros seucarro;
  enum carros somacarro;
  printf("Digite o numero da marca do seu carro\n");
  scanf("%d", &seucarro);
  printf("Seu carro: %d\n", seucarro);
  meucarro = porsche;
  printf("Meu carro: %d\n", meucarro);
  somacarro = meucarro + seucarro;
  printf("Seu carro + meu carro: %d\n", somacarro);
}
