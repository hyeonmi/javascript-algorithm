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
                //TODO
                if(current.next.data.key === data.key){
                    current.next = current.next.next;
                    return;
                }
                current = current.next;
            }   
        },

        find: function(data){
            if(head === null){
                return null;
            }

            var current = head;
            while(current !== null){
                //TODO 임시
                if(current.data.key === data.key){
                    return current;
                }
                current = current.next;
            }
            
            return null;
        }
    }
}

function HashTable(size){
    var keys = {};
    var buckets = Array(size).fill(null).map(function(){return new LinkedLists()});

    return {
        hash: function(key){
            var firstCharCode = key.charCodeAt(0);
            return firstCharCode % buckets.length;
        },

        set: function(key, value){
            var keyHash = this.hash(key);
            keys[key] = keyHash;
            var entries = buckets[keyHash];
            var node = entries.find(value);

            if(node){
                node.data.value = value;
                return;
            }

            entries.append({key, value});
        },

        delete: function(key){
            var keyHash = this.hash(key);
            delete keys[key];
            var entries = buckets[keyHash];
            var node = entries.find({key});

            if(node){
                return buckets.deleteWithValue({key})
            }

            return null;

        },

        get: function(key) {
            var entries = buckets[this.hash(key)];
            return entries.find({key});
        },

        has(key){
            return Object.hasOwnProperty.call(keys, key);
        },

        getKeys(){
            return Object.keys(keys);
        }
    }
}

var hashtable = new HashTable(20);
hashtable.set("kim", 20);
hashtable.set("lee", 10);
hashtable.set("kyo", 30);