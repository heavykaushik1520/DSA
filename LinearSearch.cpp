#include <iostream>
#include <vector>

int linearSearch(const std::vector<int> &arr, int target)
{
    for (int i = 0; i < arr.size(); ++i)
    {
        if (arr[i] == target)
        {
            return i;
        }
    }
    return -1;
}

int main()
{
    std::vector<int> arr = {5, 3, 9, 7, 2, 8, 4};
    int target = 7;

    int index = linearSearch(arr, target);

    if (index != -1)
    {
        std::cout << "Element found at index " << index << std::endl;
    }
    else
    {
        std::cout << "Element not found in the array" << std::endl;
    }

    return 0;
}
