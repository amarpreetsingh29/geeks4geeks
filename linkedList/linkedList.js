function iterativeLinkedList(input) {
    var linkedList = null;
    if (input instanceof Array && input.length) {
        var i, temp;
        i = input.length - 1;
        for (; i != -1; i--) {
            temp = {
                data: input[i],
                next: null
            }
            temp.next = linkedList;
            linkedList = temp;
        }
    }
    return linkedList;
}

function search(head, x) {
    var node = head;
    while (node != null) {
        if (node.data === x) return node;
        node = node.next;
    }
    return node;
}

function getPreviousNode(head, x) {
    var node = head;
    while (node != null) {
        if (node.next.data === x) return node;
        node = node.next;
    }
    return node;
}

function swapByChangingPointer(head, x, y) {
    var previous_x, previous_y, current_x, current_y;
    previous_x = getPreviousNode(head, x);
    previous_y = getPreviousNode(head, y);
    current_x = previous_x.next;
    current_y = previous_y.next;

    //inter change
    previous_x.next = current_y;
    previous_y.next = current_x;
    current_x.next = current_y.next;
    current_y.next = previous_y;

    return head;
}

var list = iterativeLinkedList([10, 15, 12, 13, 20, 14]);
//swapByChangingPointer(list,12,20);


var list = iterativeLinkedList([1, 2, 3, 4, 5, 6, 7]);
swapByChangingPointer(list, 3, 4);

var list = iterativeLinkedList([1, 2, 3, 4, 5, 6, 7]);
//swapByChangingPointer(list, 1, 7); // TODO fix: for head and end node


function middleOfList() {

}
function lengthOfList(head) {
    if (head) {
        var count = 0;
        var node=head;
        while (node != null) {
            ++count;
            node = node.next;
        }
    }
    return count;
}
function searchWithIndex(head,index){
    if(head){
        var i=0;
        var node = head;
        while(node!=null){
            if(++i==index) {
                return node;
            }
            node = node.next;
        }
    }
}
function nthNodeFromEnd(head,n) {
    var len = lengthOfList(head);
    var indexfromBegin=len-n+1;
    return searchWithIndex(head,indexfromBegin);
}

var list = iterativeLinkedList([1, 2, 3, 4, 5, 6, 7]);
nthNodeFromEnd(list,2);

function reverse(head){
    var current,prev,next;
    current=head;
    prev=next=null;
    while(current!==null){
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    head = prev;
    return head;
}

var list = iterativeLinkedList([1, 2, 3, 4, 5, 6, 7]);
var rev = reverse(list);
console.log(rev);