# 이진 탐색 트리(Binary Search Tree)
노드는 데이터와 왼쪽, 오른쪽 자식 노드를 갖는다.
왼쪽은 노드 데이터 보다 작은 값이, 오른쪽은 노드 데이터 보다 큰 값이 존재한다.

### 너비 우선 탐색(Breadth First Search)
root를 Queue에 넣은 후 왼쪽, 오른쪽 자식 순서로 Queue에서 추가한다.
Queue에 노드를 꺼내와서 자식 노드가 존재하면 왼쪽, 오른쪽 자식을 다시 Queue에 enqueue 한다.
이 작업은 반복한다.

### 깊이 우선 탐색(Depth First Search)
- PreOrder : data - left - right
- InOrder : left - data - right
- PostOrder : left - right - data

## Time complexity
Algorithm | Average | Worst case
----------|---------|----------
Space     | O(n)    | O(n)
Search    | O(log n)| O(n)
Insert    | O(log n)| O(n)
Delete    | O(log n)| O(n)

## Reference
- [Youtube by javascript](https://www.youtube.com/watch?v=5cU1ILGy6dM)
- [Code Pen](https://codepen.io/beaucarnes/pen/ryKvEQ?editors=0010)
- [BFS vs. DFS](https://medium.com/basecs/breaking-down-breadth-first-search-cebe696709d9)