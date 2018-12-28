#include<stdio.h>

int x1, y1, x2, y2, x3, y3, x4, y4, rec1height, rec1width, rec2height, rec2width, recintheight, recintwidth, area1, area2, interarea;

void main () {
  printf("Medidor de intersecção de retângulos\nWritten by NSTSeek\nDigite as coordenadas dos extremos superiores esquerdos e inferiores direitos dos dois retângulos começando pelas coordenadas mais a esquerda do retângulo mais a esquerda no formato x1, y1\n");
  scanf("%d, %d", &x1, &y1);
  printf("Agora as coordenadas mais a direita do mesmo retângulo no mesmo formato\n");
  scanf("%d, %d", &x2, &y2);
  printf("Agora as coordenadas mais a esquerda do retângulo mais a direita no mesmo formato\n");
  scanf("%d, %d", &x3, &y3);
  printf("Agora as coordenadas mais a direita do mesmo retângulo\n");
  scanf("%d, %d", &x4, &y4);
  rec1height = y1 - y2;
  rec1width = x2 - x1;
  rec2height = y3 - y4;
  rec2width = x4 - x3;
  area1 = rec1height * rec1width;
  area2 = rec2height * rec2width;
  recintwidth = x2 - x3;
  if (y1 < y3) {
    recintheight = y1 - y4;
  }
  if (y1 > y3) {
    recintheight = y3 - y2;
  }
  if (y1 == y3) {
    recintheight = rec1height;
  }
  interarea = recintheight * recintwidth;
  printf("A área do retângulo mais a esquerda é %d e a área do retângulo mais a direita é %d\n", area1, area2);
  if (y1 <= y4 || x2 <= x3 || y2 >= y3) printf("Não há interseção\n");
  else printf("A intersecção vale %d\n", interarea);

}
