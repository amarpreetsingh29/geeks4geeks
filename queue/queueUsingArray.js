function queueUsingArray(max){
    var arr,end;
    end=-1;
    arr=[];
    function enqueue(item){
        //overflow condition
        if(end==max-1){
            throw Error("queue overflow");
        }
         end+=1;
        arr[end]=item;
        console.log(item);
    }
    function dequeue(){
        var item;

        //underflow condition
        if(end==-1){
            throw Error("queue underflow");
        }
        end-=1;
        item=arr.splice(0,1);
        console.log(item[0]);
        return item;
    }
    return{
        enqueue:enqueue,
        dequeue:dequeue
    }
}

var s1=queueUsingArray(5);
s1.enqueue(1);
s1.enqueue(2);
s1.enqueue(3);
s1.enqueue(4);
s1.dequeue();
s1.dequeue();
s1.enqueue(5);
s1.enqueue(6);
s1.enqueue(7);
s1.enqueue(8);