function ShellSort(data) {
    let len = data.length;
    let h = 1;
    while (h < len / 3) {
        h = 3 * h + 1;
    }
    console.time("Time");
    while (h >= 1) {
        for (let i = h; i < len; i++) {
            for (let j = i; j >= h; j -= h) {
                if (data[j] < data[j - h]) {
                    [data[j], data[j - h]] = [data[j - h], data[j]];
                }
            }
        }
        h = Math.floor(h / 3);
    }
    console.timeEnd("Time");
}

let data = [];
for(let i = 0; i<20000;i++){
    data.push(Math.floor(Math.random()*1000));
}

ShellSort(data);
