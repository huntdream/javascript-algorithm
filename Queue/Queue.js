function Queue() {
    let items = [];

    this.enqueue = function (element) {
        items.push(element);
    };

    this.dequeue = function () {
        return items.shift();
    };

    this.front = function () {
        return items[0];
    };

    this.isEmpty = function () {
        return items.length === 0 ?"Queue is empty":"Queue is not empty";
    };

    this.size = function () {
        return "Size: "+items.length;
    };

    this.print = function () {
        console.log(items.toString());
    };
}


//test
let queue = new Queue();
console.log(queue.isEmpty());

queue.enqueue("Yu Mao");
queue.enqueue("Some One");
console.log(queue.isEmpty());
console.log(queue.size());
queue.print();