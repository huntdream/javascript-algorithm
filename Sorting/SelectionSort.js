function SelectionSort(data){
    for(let i=0,len = data.length;i<len;i++){
        let min = i;
        for(let j=i+1,len = data.length;j<len;j++){
            if(data[min]>data[j]){
                min = j;
            }
        }
        if(min!==i){
            // ES5
            // let temp = data[min];
            // data[min] = data[i];
            // data[i]=temp;

            // ES6, destruture
            [data[i],data[min]] = [data[min],data[i]];
        }
        console.log(data);
    }
}

SelectionSort([2,7,8743,24,5,5,5]);

export default SelectionSort;