function stackUsingArray(max) {
    var arr, top;
    top = -1;
    arr = [];
    function push(item) {
        //overflow condition
        if (top == max - 1) {
            throw Error("stack overflow");
        }
        top += 1;
        arr.push(item);
        console.log(item);
    }
    function pop() {
        var item;

        //underflow condition
        if (top == -1) {
            throw Error("stack underflow");
        }
        item = arr[top];
        top -= 1;
        arr.pop();
        console.log(item);
        return item;
    }
    return {
        push: push,
        pop: pop
    }
}

var s1 = stackUsingArray(5);
s1.push(1);
s1.push(2);
s1.push(3);
s1.push(4);
s1.pop();
s1.pop();
s1.pop();