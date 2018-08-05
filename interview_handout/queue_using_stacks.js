function Queue(){
    var inqueue = [];
    var outqueue = [];

    return{
        enqueue: function(data){
            while(outqueue.length){
                inqueue.push(outqueue.pop());
            }
            inqueue.push(data);

            return inqueue;
        },

        dequeue: function(){
            while(inqueue.length){
                outqueue.push(inqueue.pop());
            }

            return outqueue.pop();
        }

    }
}