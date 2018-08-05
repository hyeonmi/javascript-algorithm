# Quick Sort
퀵 정렬은 배열의 pivot 값을 기준으로 작은 값을 왼쪽, 큰 값을 오른쪽으로 정렬한다.
pivot 값은 보통 배열의 중간 위치에 값을 설정한다.

1. 배열의 중간 위치의 index 값을 구한다. 이 값을 pivot으로 설정한다.
2. pivot 기준으로 작은 값을 왼쪽과 큰 값을 오른쪽을 나눈다.
    - 전달 받은 배열의 처음과 끝 위치에 left, right 참조를 돌면서 
    - pivot보다 right가 크면 right index 값을 -- 로 줄여간다.
    - pivot보다 left가 작으면 left index 값을 ++로 늘려간다.
    - 이 과정을 left < right index상태일때
3. 작은값과 큰값으로 정리된 두개의 배열을 재귀로 quicksort 호출 한다.


## Performance
Best case  | Average    | Worst case | Space 
---------- | ---------- | ---------- | -------
O(n log n) | O(n log n) | O(n^2)     | O(log n) / O(1)

## Reference
- [Wikipedia](https://ko.wikipedia.org/wiki/%ED%80%B5_%EC%A0%95%EB%A0%AC)