#include<stdio.h>
#include<stdlib.h>

#define bufsize 9
#define cars 186

FILE *fp;
char filename[60];
char cartitle[cars][60] = {0};
char buf[bufsize] = {0};
char test;
int aux;
int count = 0;
int price[cars] = {0};
int i = 0;
int j = 0;

void main () {
  printf("Find the cheapest hardtop convertible\nEnter the name of the file - it can't have any spaces\n");
  //scanf("%s", &filename);
  printf("Filename entered: %s\n\n", filename);
  fp = fopen("hardtopconvertibles.html", "r");
  if ( fp == NULL ) {
    printf("Could not open the file\n");
    return;
  }
  printf("File open\n\n");
  while(1) {
    test = fgetc(fp);
    if ( feof(fp) ) break;
    if ( test == '>') {
      test = fgetc(fp);
      if ( test == '$' ) {
        //need to go 2 linefeeds above and '<' then get the name until '>'
        while (1) {
          test = fgetc(fp);
          if ( test == '<') break;
          if ( test == '.') continue;
          else {
            buf[i] = test;
            i++;
          }
        }
        price[j] = atoi(buf);
        printf("New price[%d] obtained: %d\n", j+1, price[j]);
        for (i = 0 ; i < bufsize ; i++){
          buf[i] = 0;
        }
        i = 0;
        j++;
      }
    }
  }
  i = 0;
  j = 0;
  fseek(fp, 0, SEEK_SET);
  while (1) {
    test = fgetc(fp);
    if (feof(fp)) break;
    if (test == '>') {
      test = fgetc(fp);
      if (test == '$') {
        while (1) {
          test = fgetc(fp);
          if (test != 10) fseek(fp, -2, SEEK_CUR);
          if (test == 10) {
            i++;
            fseek(fp, -2, SEEK_CUR);
          }
          if (i == 3) break;
        }
        i = 0;
        while (1) { //search for the > that preceeds the brand name
          fseek(fp, -2, SEEK_CUR);
          test = fgetc(fp);
          if (test == '<' && i == 0) {
            i++;
          }
          if (test == '>' && i == 1) {
            break;
          }
        }
        i = 0;
        while (1) { //start recording the brand name
          test = fgetc(fp);
            if (test != '<')  cartitle[j][i] = test;
          if (test == '<') {
            cartitle[j][i] = ' ';
            i++;
            break;
          }
          i++;
        }
        while (1) { //search for the next linefeed - going down to model name
          test = fgetc(fp);
          if ( test == 10 ) break;
        }
        while (1) { //search the > before model name
          test = fgetc(fp);
          if ( test == '>') break;
        }
        while (1) { //start recording model name
          test = fgetc(fp);
          if (test != '<') {
            if (test != '$') {
              cartitle[j][i] = test;
              i++;
            }

          }
          else {
            break;
          }
        }
      }
    }
  }
  printf("\n%d prices encountered\n", j);
  printf("\nOrdering by price...\n\n");
  j = 0;
  while(1) {
    for ( i = 0 ; i < cars-1 ; i++ ) {
      if ( price[i] > price[i+1] ) {
        aux = price[i];
        price[i] = price[i+1];
        price[i+1] = aux;
      }
    }
    for (i = 0 ; i < cars-1 ; i++) {
      if ( price[i] <= price[i+1] ) {
        count++;
      }
    }
    if ( count == cars-1 ){
      for (i = 0 ; i < cars ; i++) printf("%d - %d\n", i+1, price[i]);
      return;
    }
    else count = 0;
  }
}
