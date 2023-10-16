function Karatsuba(x, y) {  
    if (x < 10 && y < 10) {
        return x * y;
    }
    else {

        let k = Math.max(x.toString().length , y.toString().length);
        let mid = Math.floor(k / 2);

        let [a,b] = split(x);
        let [c,d] = split(y);
        console.log('a = ' + a + ' b = ' + b + ' c = ' + c + ' d = ' + d);
        console.log("----------------------------------------");
        let ac = Karatsuba(a, c);
        let bd = Karatsuba(b, d);

        let adSumbc = Karatsuba(a+b, c+d) - ac - bd;

        return ac * 10 ** ( 2 * mid ) + adSumbc * 10 ** mid + bd;
    }
};

function split(number) {
    let len = number.toString().length;
    if (!isFinite(number)) {
        throw Error(`Cannot split this number: ${number}`);
    }
    if (number.len === 1) {
        return number;
    }
    const mid = Math.floor(len / 2);
    const divider = 10 ** mid;

    let num1 = Math.floor(number / divider);
    let num2 = number % divider;

    return [num1, num2];
};

const t0 = performance.now()
console.log("Karatsuba algorithm: ");
console.log(Karatsuba(92846745,28388462));
const t1 = performance.now()
console.log(`Time it takes to run the function: ${t1 - t0} ms`)
//console.log(Karatsuba(3432,123344545))
