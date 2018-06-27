const Queue = require("./index");

describe("Queue > ", () => {
    let queue;
    beforeEach(() => {
        queue = new Queue();
    });

    afterEach(() => {
        queue = null;
    });

    test("마지막에 값이 추가 되어야 한다.", () => {
        //given
        const data = "test";
    
        //when
        queue.add(data);
    
        //then
        expect(queue.peek()).toEqual(data);
    });
    
    test("첫번째 넣은 값을 조회 할 수 있다.", () => {
        //given

        //when
        const firstData = 1;
        queue.add(firstData);
        const secondData = 2;
        queue.add(secondData);

        //then
        expect(queue.peek()).toEqual(firstData);
        expect(queue.isEmpty()).toBeFalsy;
    });
    
    test("첫번째 넣은 값을 조회하고 제거 할 수 있다.", () => {
        //given
        const firstData = "first data";
        queue.add(firstData);

        //when
        const data = queue.remove();
    
        //then
        expect(data).toEqual(firstData);
        expect(queue.isEmpty()).toBeTruthy;
    });

    test("조회 할 값이 없으면 null이 반환 되어야 한다.", () => {
        //given
    
        //when
    
        //then
        expect(queue.remove()).toBeNull();
    });

    test("비여 있는지 여부를 알 수 있어야 한다.", () => {
        //given

        //when
        
        //then
        expect(queue.isEmpty()).toBeFalsy;

        //when
        queue.add("blabla");

        //then
        expect(queue.isEmpty()).toBeTruthy;
    })

});
