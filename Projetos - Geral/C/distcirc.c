#include<stdio.h>
#include<math.h>

float x1, _y1, x2, y2, radius, radius2;
float dist, incl, dif_x1x2, dif_y1y2, yolo;

void main () {
	printf("Verificador de interseccao de circulos\nDigite as coordenadas do centro do primeiro circulo e o valor de seu raio no formato x1, y1, raio\n");
	scanf("%f, %f, %f", &x1, &_y1, &radius);
	printf("Seus valores: %1.0f, %1.0f, %1.0f\n", x1, _y1, radius);
	printf("Digite as coordenadas do centro do segundo circulo e o valor de seu raio no formato x2, y2, raio2\n");
	scanf("%f, %f, %f", &x2, &y2, &radius2);
	printf("Seus valores: %1.0f, %1.0f, %1.0f\n", x2, y2, radius2);
	dif_x1x2 = x1 - x2;
	dif_y1y2 = _y1 - y2;
	dist = sqrt((dif_x1x2 * dif_x1x2) + (dif_y1y2 * dif_y1y2));
	printf("Distancia: %f\n", dist);
	printf("Soma dos raios: %f\n", (radius + radius2));
	if(dist > (radius + radius2)) {
	printf("Nao existe intersecao entre os circulos\n");
	}
	else {
	printf("Temos uma  intersecao entre os circulos\n");
	}
}

