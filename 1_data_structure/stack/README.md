# Stack
스택은 LIFO(Last In First Out) 입니다. 즉 마지막에 넣은 값이 첫번째로 나옵니다.
자바스크립트 Array에 push, pop을 사용하면 간단하게 구현할 수 있습니다.
여기 예제에서는 Singly Linked List로 구현 하는 방식을 사용 했습니다.
top 포인터가 존재하며 push되면 top의 위치가 가장 마지막을 가리키고 pop되면 바로 앞의 노드로 변경됩니다.
구현해야할 메소드는 push, pop, isEmpty, peek 입니다.

- push : 스택 마지막에 값을 추가 합니다.
- pop : 스택 마지막 값을 반환하고 제거 합니다.
- peek : 스택 마지막 값을 반환합니다. 제거하지 않습니다.
- isEmpty: 비어있는 여부를 반환 합니다.

![wikipedia-stack](../../img/stack.png)

## Time complexity
Algorithm | Average | Worst case
----------|---------|----------
Space     | O(n)    | O(n)
Search    | O(n)    | O(n)
Insert    | O(1)    | O(1)
Delete    | O(1)    | O(1)

## 참고
- [Wikipedia](https://en.wikipedia.org/wiki/Stack_(abstract_data_type))