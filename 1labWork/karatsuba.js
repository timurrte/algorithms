function karatsuba(x, y) {
    if (x<10 && y<10) {
      return x*y;
    }
    let maxLength = Math.max(x.toString().length, y.toString().length);
    let m = Math.round(maxLength/2);
  
    let a = Math.floor(x/ Math.pow(10,m));
    let c = Math.floor(y/ Math.pow(10,m));
    let b = x %  Math.pow(10,m);
    let d = y %  Math.pow(10,m);
  
    // console.log('a = ' + a + ' b = ' + b + ' c = ' + c + ' d = ' + d);
    // console.log("----------------------------------------");

    let ac = karatsuba(a, c);
    let bd = karatsuba(b, d);
    let e = karatsuba(b+a, d+c)-ac-bd;
  
    return ac * Math.pow(10, m*2) + e * Math.pow(10,m) + bd;
  }


console.log("Karatsuba algorithm: ");
const t0 = performance.now()

console.log(karatsuba(92846745,28388462))

const t1 = performance.now()
console.log(`Time it takes to run the function: ${t1 - t0} ms`)