const LinkedLists = require("./index");

describe("LinkedLists > ", () => {
    let linkedLists;
    beforeEach(() => {
        linkedLists = new LinkedLists();
    });

    afterEach(() => {
        linkedLists = null;
    });

    test("데이터를 리스트 앞에 추가 할 수 있다.", () => {
        //given
        linkedLists.append("first");
        const prependData = "prepend";

        //when
        linkedLists.prepend(prependData);
    
        //then
        expect(linkedLists.peek().data).toEqual(prependData);
    });

    test("데이터를 리스트 뒤에 추가 할 수 있다.", () => {
        //given
        linkedLists.append("first");
        const appendData = "append";

        //when
        linkedLists.append(appendData);

        //then
        expect(linkedLists.peek().next.data).toEqual(appendData);
    });

    test("리스트에서 데이터가 있으면 삭제 할 수 있다.", () => {
        //given
        const willFindData = "data";
        const tailData = "tailData";
        linkedLists.append("first");
        // linkedLists.append(willFindData);
        linkedLists.append(tailData);

        //when
        linkedLists.deleteWithValue(willFindData);

        //then
        expect(linkedLists.peek().next.data).toEqual(tailData);
    });

    test("리스트에 데이터가 없으면 삭제 되지 않는다.", () =>{
        const willFindData = "data";
        const tailData = "tailData";
        linkedLists.append("first");
        linkedLists.append(tailData);

        //when
        linkedLists.deleteWithValue(willFindData);

        //then
        expect(linkedLists.peek().next.data).toEqual(tailData);
    });
});
