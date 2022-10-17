#include <stdio.h>
#include <stdlib.h>

int main(int argc, char *argv[]) {
    int count = atoi(argv[1]);
    printf("I'm C<br><br>");
    printf("Count: %d<br><br>", count);
  
    for (int i = 0; i < count; i++) {
        printf("%d<br>", i);
    }
  
    return 0;
}