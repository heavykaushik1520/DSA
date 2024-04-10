#include <stdio.h>

// Prints numbers from 1 to n
void printNos(unsigned int n)
{
    if (n > 0)
    {
        printNos(n - 1);
        printf("%d ", n);
    }
    return;
}

int main()
{
    int n = 10;
    printNos(n);
    getchar();
    return 0;
}