function Node(data){
    this.data = data;
    this.next = null;
}

function Queue(){
    var head = null;
    var tail = null;

    return {
        add : function(data){
            var node = new Node(data);
            if(!head){
                head = node;
                tail = head;
            } else {
                tail.next = node;
                tail = node;
            }
        },

        remove: function() {
            if(head){
                var target = head;
                head = head.next;
                return target.data;
            }
    
            return null;
        },

        peek: function(){
            if(this.isEmpty()){
                return null;
            }

            return head.data;
        },

        isEmpty: function(){
            return head === null;
        }
    }
}

module.exports = Queue;