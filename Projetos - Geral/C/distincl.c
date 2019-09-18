#include<stdio.h>
#include<math.h>

float x1, x2, _y1, y2;
float dist, incl, dif_x1x2, dif_y1y2, yolo;

void main () {
	printf("Medidor de distancia e inclinacao de uma reta\nDigite dois pontos num plano cartesiano no formato x1, y1, x2, y2\n");
	scanf("%f, %f, %f, %f", &x1, &_y1, &x2, &y2);
	printf("Seus valores: %1.0f, %1.0f, %1.0f, %1.0f\n", x1, _y1, x2, y2);
	dif_x1x2 = x1 - x2;
	dif_y1y2 = _y1 - y2;
	dist = sqrt((dif_x1x2*dif_x1x2)+(dif_y1y2*dif_y1y2));
	if(x2 - x1 == 0) {
	printf("O calculo da inclinacao resultaria em uma divisao por zero\nImpossivel dividir por zero\n");
	incl = 0;
	}
	else
	incl = (y2 - _y1)/(x2 - x1);
	printf("A distancia dos pontos corresponde a: %f\nA inclinacao da reta corresponde a: %f\n", dist, incl);
}

