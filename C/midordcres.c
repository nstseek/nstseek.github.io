#include<stdio.h>

int a, b, c, a1, b2, c3;

void main () {
  printf("Verificador do número central de uma ordem de números crescentes\nDigite três números no formato a, b, c\n");
  scanf("%d, %d, %d", &a, &b, &c);
  if (a >= b) a1 = b;
  else a1 = a;
  if (a1 > c) a1 = c;
  if (a1 == a){
    if (b >= c) {
      b2 = c;
      c3 = b;
    }
    else {
      b2 = b;
      c3 = c;
    }
  }
  if (a1 == b){
    if (a >= c) {
      b2 = c;
      c3 = a;
    }
    else {
      b2 = a;
      c3 = c;
    }

  }
  if (a1 == c){
    if (a >= b) {
      b2 = b;
      c3 = a;
    }
    else {
      b2 = a;
      c3 = b;
    }

  }
  printf("A ordem é %d, %d, %d, tendo %d como número central\n", a1, b2, c3, b2);
}
