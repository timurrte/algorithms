const fs = require("fs")
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generate(n) {
    let arr = [];
    for (let i = 0; i < n; i++) {
    arr.push(getRandomInt(0,1000))
}
    return arr
}

function insertionSort(inputArr) {
    let n = inputArr.length;
        for (let i = 1; i < n; i++) {
            
            let current = inputArr[i];
            
            let j = i-1; 
            while ((j > -1) && (current < inputArr[j])) {
                inputArr[j+1] = inputArr[j];
                j--;
            }
            inputArr[j+1] = current;
        }
    return inputArr;
}


/* Сортування вставками */

let b10 = generate(10);

let b100 = generate(100);

let b1000 = generate(1000);

let data = {
    "b10": JSON.parse(JSON.stringify(b10)),
    "b100": JSON.parse(JSON.stringify(b100)),
    "b1000": JSON.parse(JSON.stringify(b1000)),
}

console.log("\nСортування масивів вставками:\n")

t0 = performance.now();
b10 = insertionSort(b10);
t1 = performance.now();
console.log(`Часу витрачено на сортування масиву з 10 елементів: ${t1 - t0} ms`);

t0 = performance.now();
b100 = insertionSort(b100);
t1 = performance.now();
console.log(`Часу витрачено на сортування масиву з 100 елементів: ${t1 - t0} ms`);

t0 = performance.now();
b1000 = insertionSort(b1000);
t1 = performance.now();
console.log(`Часу витрачено на сортування масиву з 1000 елементів: ${t1 - t0} ms`);

data.sorted10 = b10;
data.sorted100 = b100;
data.sorted1000 = b1000;

data = JSON.stringify(data);
fs.writeFileSync('insertionSort.json', data);