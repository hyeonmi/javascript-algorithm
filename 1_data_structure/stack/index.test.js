const Stack = require("./index");

describe("Stack > ", () => {
    let stack;
    beforeEach(() => {
        stack = new Stack();
    });

    afterEach(() => {
        stack = null;
    });
    
    test("마지막에 값이 추가 되어야 한다.", () => {
        //given
        const data = "test";
    
        //when
        stack.push(data);
    
        //then
        expect(stack.peek()).toEqual(data);
    });
    
    test("마지막에 넣은 값을 조회 할 수 있다.", () => {
        //given
            
        //when
        const firstPeek = stack.peek();

        //then
        expect(firstPeek).toBeNull;

        //when
        const data = 1;
        stack.push(data);
        const secondPeek = stack.peek();

        //then
        expect(secondPeek).toEqual(data);
    });
    
    test("마지막에 넣은 값을 조회하고 제거 할 수 있다.", () => {
        //given
        const data = "last data";
        stack.push(data);

        //when
        const lastData = stack.pop();
    
        //then
        expect(lastData).toEqual(data);
        expect(stack.isEmpty()).toBeTruthy;
    });

    test("조회 할 값이 없으면 null이 반환 되어야 한다.", () => {
        //given
    
        //when
    
        //then
        expect(stack.pop()).toBeNull();
    });

    test("비여 있는지 여부를 알 수 있어야 한다.", () => {
        //given

        //when
        
        //then
        expect(stack.isEmpty()).toBeFalsy;

        //when
        stack.push("blabla");

        //then
        expect(stack.isEmpty()).toBeTruthy;
    });
});