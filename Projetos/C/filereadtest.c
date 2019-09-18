#include<stdio.h>
#include<stdlib.h>

FILE *filepoint;
char buf[6];
char test;
int pos = 0;
float price = 2000;
int dotelim, dotindex = 0;

int main () {
  printf("Opening the file...\n");
  filepoint = fopen("hardtopconvertibles.html", "r");
  if ( filepoint != NULL) printf("File open\n");
  else printf("File NULL, error opening file\n");
  while( !feof(filepoint) ){
    while( !feof(filepoint) ) {
      pos++;
      test = fgetc(filepoint);
      if (feof(filepoint)){
        printf("Found end of file\n", test, test);
        break;
      }
      if (test == '>') {
        test = fgetc(filepoint);
        if (test == '$') break;
      }
    }
    if (feof(filepoint)) break;
    fgets(buf, 7, filepoint);
    printf("$%s\n", buf);
  }
}
    /*for (int i = 0; i < sizeof(buf); i++) {
      if (buf[i] == '.' && dotelim == 0) {
        dotelim = 1;
        dotindex = i;
      }
      else if (buf[i] == '.' && dotelim == 1) {
        printf("dot 2 found at %d position\n", i);
        printf("initial value %s\n", buf);
        for (int j = dotindex; j < 7; j++) {
          buf[j] = buf[j+1];
        }
        printf("final value %s\n", buf);
      }
    }
    dotelim = 0;
    dotindex = 0;
    if (price > atof(buf)) {
      price = atof(buf);
      printf("%s ou em float %f\n", buf, price);
    }
    if ( feof(filepoint) ) break;
  }
  printf("float price %f\n", buf, price);*/
