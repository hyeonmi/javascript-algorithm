# Queue
큐는 FIFO(First In First Out) 입니다. 한줄 서기를 생각하면 쉽습니다.
자바스크립트 Array의 push, shift를 사용하면 쉽게 구현할 수 있습니다.
여기 예제에서는 Singly Linked List로 구현하였습니다.
head, tail 두가지 포인터가 존재하며 head는 가장 첫번째, tail은 가장 마지막 번째 노드를 가리킵니다.
구현해야할 메소드는 add, remove, isEmpty, peek 입니다.

- add / enqueue: 큐 마지막에 값을 추가 합니다.
- remove / dequeue : 큐 첫번째 값을 반환하고 제거 합니다.
- peek : 큐 첫번째 값을 반환합니다. 제거하지 않습니다.
- isEmpty: 비어있는 여부를 반환 합니다.

![wikipedia-queue](../img/queue.png)

## Time complexity
Algorithm | Average | Worst case
----------|---------|----------
Space     | O(n)    | O(n)
Search    | O(n)    | O(n)
Insert    | O(1)    | O(1)
Delete    | O(1)    | O(1)


## Reference
- [Wikipedia](https://en.wikipedia.org/wiki/Queue_(abstract_data_type))