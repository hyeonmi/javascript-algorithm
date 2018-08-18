# Selection Sort
선택 정렬 동작 방식은 다음과 같다.

1. 첫번째 인덱스 값과 나머지 값들을 비교한다.
2. 가장 작은 값을 첫번째와 교환한다.
3. 두번째 인덱스와 나머지 값들을 비교한다.
4. 가장 작은 값을 두번째와 교환한다.
5. 이런 방식으로 정렬된 값을 제외하고 나머지를 비교해서 작은 값을 발견하면 교환한다.

![selection sort](../../img/selection_sort.gif)

## Performance
Best case          | Average            | Worst case         | Space 
------------------ | ------------------ | ------------------ | -------
O(n^2)비교, O(n)교환 | O(n^2)비교, O(n)교환 | O(n^2)비교, O(n)교환  | O(1)

## Reference
- [Wikipedia](https://ko.wikipedia.org/wiki/%EC%84%A0%ED%83%9D_%EC%A0%95%EB%A0%AC)