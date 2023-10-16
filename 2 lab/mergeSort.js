const fs = require("fs")

function generate(n) {
    let arr = [];
    let getRandomInt = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    for (let i = 0; i < n; i++) {
    arr.push(getRandomInt(0,1000))
}
    return arr
}


function merge(left, right) {
    let arr = []

    while (left.length && right.length) {
        if (left[0] < right[0]) {
            arr.push(left.shift())  
        } else {
            arr.push(right.shift()) 
        }
    }
    
    return [ ...arr, ...left, ...right ]
}

function mergeSort(array) {
    const half = array.length / 2
    
    if(array.length < 2){
      return array 
    }
    
    const left = array.splice(0, half)
    return merge(mergeSort(left),mergeSort(array))
}


let n10 = generate(10);

let n100 = generate(100);

let n1000 = generate(1000);

let data = {
    "n10": JSON.parse(JSON.stringify(n10)),
    "n100": JSON.parse(JSON.stringify(n100)),
    "n1000": JSON.parse(JSON.stringify(n1000)),
}

console.log("\nСортування масивів злиттям\n")
let t0 = performance.now();
n10 = mergeSort(n10);
t1 = performance.now();
console.log(`Часу витрачено на сортування масиву з 10 елементів: ${t1 - t0} ms`);

t0 = performance.now();
n100 = mergeSort(n100);
t1 = performance.now();
console.log(`Часу витрачено на сортування масиву з 100 елементів: ${t1 - t0} ms`);

t0 = performance.now();
n1000 = mergeSort(n1000);
t1 = performance.now();
console.log(`Часу витрачено на сортування масиву з 1000 елементів: ${t1 - t0} ms`);

data.sorted10 = n10;
data.sorted100 = n100;
data.sorted1000 = n1000;

data = JSON.stringify(data);
fs.writeFileSync('mergeSort.json', data);
