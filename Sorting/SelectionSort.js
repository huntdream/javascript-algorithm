function SelectionSort(data) {
    let len = data.length;
    console.time('Time');
    for (let i = 0; i < len; i++) {
        let min = i;
        for (let j = i + 1; j < len; j++) {
            if (data[min] > data[j]) {
                min = j;
            }
        }
        if (min !== i) {
            [data[i], data[min]] = [data[min], data[i]];
        }
    }
    console.timeEnd('Time');
}

let data = [];
for(let i = 0; i<20000;i++){
    data.push(Math.floor(Math.random()*1000));
}

SelectionSort(data);
