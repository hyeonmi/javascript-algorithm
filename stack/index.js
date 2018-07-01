function Node(data){
    this.data = data;
    this.prev = null;
}

function Stack(){
    var top = null;    

    return {
        pop: function(){
            if(top){
                var data = top.data;
                top = top.prev;
                return data;
            }
            return null;
        },

        push: function(data){
            var node = new Node(data);
            node.prev = top;
            top = node;
        },

        peek: function(){
            if(this.isEmpty()){
                return null;
            }
    
            return top.data;
        },

        isEmpty: function() {
            return top === null;
        }
    }
}

module.exports = Stack;