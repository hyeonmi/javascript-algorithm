function Node(data){
    this.data = data;
    this.next = null;
}


function LinkedLists(){
    var head = null;

    return{
        peek: function(){
            return head;
        },

        append: function(data){
            var node = new Node(data);

            if(head === null){
                head = node;
                return;
            }

            var current = head;
            while(current.next !== null){
                current = current.next;
            }
            current.next = node;
        },

        prepend: function(data){
            var node = new Node(data);
            node.next = head;
            head = node;
        },

        deleteWithValue: function(data){
            if(head === null){
                return;
            }

            if(head.data === data){
                head = head.next;
                return;
            }

            var current = head;
            while(current.next !== null){
                if(current.next.data === data){
                    current.next = current.next.next;
                    return;
                }
                current = current.next;
            }   
        }
    }
}