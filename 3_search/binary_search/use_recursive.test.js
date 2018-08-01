const binarySeachRecursive = require("./use_recursive");

describe("Binary Search With recursive > ", () => {
    test("빈 배열을 넣었을 경우 false가 반환 된다.", () => {
        //given
        const array = [];
        const x = 10;
        const left = 0;
        const right = 0;

        //when
        const result = binarySeachRecursive(array, x, left, right);

        //then
        expect(result).toBeFalsy;
    });

    describe("값이 목록에 있는지 알수 있다.", () => {
        let array, left, right;
        beforeEach(() => {
            array = [1, 3, 10, 33, 60, 99];
            left = 0;
            right = array.length - 1;
        });

        afterEach(() => {
            array = null;
        });

        test("찾는 값이 있으면 true를 반환 한다.", () => {
            //given 
            const x = 10;
    
            //when
            const result = binarySeachRecursive(array, x, left, right);
    
            //then
            expect(result).toBeTruthy;
        });

        test("찾는 값이 없으면 false를 반환 한다.", () => {
            //given 
            const x = 200;
    
            //when
            const result = binarySeachRecursive(array, x, left, right);
    
            //then
            expect(result).toBeFalsy;
        });
    });
});