# Merge Sort
병합 정렬은 전체를 계속 반으로 나누고 나눠진 2개의 배열을 비교해여  
작은 값을 한 배열에 담은 후 반환하는 과정을 되풀이 한다.  
아래 이미지를 보면 이해하기 쉽다.
이 코드는 Top-Down 방식으로 구현 했다.

![wikipedia_merge_sort](../img/merge_sort.gif)


## Performance
Best case   | Average   | Worst case | Space 
---------- | ---------- | ---------- | -------
O(n log n) | O(n log n) | O(n log n) | O(n)

## Reference
- [Wikipedia](https://ko.wikipedia.org/wiki/%ED%95%A9%EB%B3%91_%EC%A0%95%EB%A0%AC)