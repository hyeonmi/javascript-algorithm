# Insertion Sort

### 정렬
정렬 하려면 배열의 최소 갯수가 2 이상여야 한다.

1. index 1번에서 시작한다.  
2. index 보다 앞에 있는 데이터의 모든 값을 순회(j)하면서 값을 비교한다.
3. 만약 j 위치에 해당 데이터가 index 값보다 작으면 j + 1 위치에 j 데이터를 넣는다.
4. j 위치에 index 데이터를 넣는다.

![Insertion Sort](../../img/insertion_sort.gif)

### 삽입
1. 배열의 마지막에 해당 요소를 추가 한다.
2. 정렬을 수행한다.

## Performance
 Best case         |  Average        | Worst case      | Space 
-------------------| --------------- | --------------- | ---------
 O(n)비교, O(1) 교환  | О(n^2) 비교, 교환 | О(n^2) 비교, 교환 | O(n), O(1)

## Reference
- [Insertion Sort description](https://ratsgo.github.io/data%20structure&algorithm/2017/09/06/insmersort/)
- [Wikipedia](https://ko.wikipedia.org/wiki/%EC%82%BD%EC%9E%85_%EC%A0%95%EB%A0%AC)
- [Javascript Code](https://hackernoon.com/programming-with-js-insertion-sort-1316df8354f5)
