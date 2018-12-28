#include<stdio.h>

#define cars 186

FILE *fp;
char test = 0;
char cartitle[cars][60] = {0};
int i = 0;
int j = 0;
int vazanegao = 0;

void main () {
  printf("Find the cheapest hardtop convertible\nEnter the name of the file - it can't have any spaces\n");
  //scanf("%s", &filename);
  fp = fopen("hardtopconvertibles.html", "r");
  if ( fp == NULL ) {
    printf("Could not open the file\n");
    return;
  }
  printf("File open\n\n");
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
            vazanegao = 1;
            break;
          }
        }
      }
    }
  }
}
