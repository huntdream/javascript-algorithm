function InsertionSort(data) {
    let len = data.length;
    console.time('Time');
    for (let i = 1; i < len; i++) {
        for (let j = i - 1; j >= 0; j--) {
            if (data[j+1] < data[j]) {
                [data[j], data[j+1]] = [data[j+1], data[j]];
            } else {
                break;
            }
        }
    }
    console.timeEnd('Time');
}

let data = [];
for(let i = 0; i<20000;i++){
    data.push(Math.floor(Math.random()*1000));
}
InsertionSort(data);