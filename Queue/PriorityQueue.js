function PriorityQueue() {
    let items = [];

    function QueueElement(element,priority) {
        this.elememt = element;
        this.priority = priority;
    }

    this.enqueue = function (element,priority) {
        let queueElement = new QueueElement(element,priority);

        if(items.isEmpty){
            items.push(queueElement);
        }
        else {
            let added = false;
            for(let i = 0;i<items.length;i++){
                if(queueElement.priority<items[i].priority){
                    items.splice(i,0,queueElement);
                    added = true;
                    break;
                }
            }
            if(!added){
                items.push(queueElement);
            }
        }
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
        console.log(items);
    };
}


//test
let priorityQueue = new PriorityQueue();
priorityQueue.enqueue("John", 2);
priorityQueue.enqueue("Jack", 1);
priorityQueue.enqueue("Camila", 1);
priorityQueue.print();