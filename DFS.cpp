#include <istream>
#include <iostream>
#include <map>
#include <list>


using namespace std;

int main()
{
    map<int, bool> visited;
    map<int, list<int>> adj;

    auto addEdge = [&adj](int v, int w)
    { adj[v].push_back(w); };

    auto DFS = [&visited, &adj](int v)
    {
        visited[v] = true;
        cout << v << " ";

        for (int neighbor : adj[v])
        {
            if (!visited[neighbor])
                DFS(neighbor);
        }
    };

    addEdge(0, 1);
    addEdge(0, 2);
    addEdge(1, 2);
    addEdge(2, 0);
    addEdge(2, 3);
    addEdge(3, 3);

    cout << "Following is Depth First Traversal (starting from vertex 2) \n";
    DFS(2);

    return 0;
}
