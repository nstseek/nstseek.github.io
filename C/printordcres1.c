#include <stdio.h>

int a, b, c, men, mid, mai, menis;
//menis serve pra definir qual das variaveis foi pega para compor o menor numero armzenado em men
//1 significa a, 2 significa b e 3 significa c
void main () {
  printf("Organizador de números em ordem crescente 2\nWritten by NSTSeek\nDigite três números no formato a, b, c\n");
  scanf("%d, %d, %d", &a, &b, &c);
  if (a >= b) {
    men = b;
    menis = 2;
  }
  else {
    men = a;
    menis = 1;
  }
  if (c < men) {
    men = c;
    menis = 3;
  }
  //menor definidovoid
  //organizando men, mid e mai, que, respectivamente, significam menor, middle e maior
  //middle significa meio ou intermediário
  if (menis == 1) {
    if(b >= c) {
      mid = c;
      mai = b;
    }
    else {
      mid = b;
      mai = c;
    }
  }
  if (menis == 2) {
    if(a >= c) {
      mid = c;
      mai = a;
    }
    else {
      mid = a;
      mai = c;
    }
  }
  if (menis == 3) {
    if (a >= b) {
      mid = b;
      mai = a;
    }
    else {
      mid = a;
      mai = b;
    }
  }
  printf("A ordem correta dos números é %d, %d e %d\n", men, mid, mai);
}
