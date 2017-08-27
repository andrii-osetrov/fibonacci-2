let n = parseInt(prompt('Enter the number'));

function print(data) {
    document.write(data + '<br>');
    }
function fib(n) {
    if (n===0) {
        return 0;
    }
    else if (n===1) {
        return 1;
    }
    return fib(n - 2) + fib(n - 1);
}

function bine(n) {
    let sqrt5 = Math.sqrt(5);
    let a = (1 + sqrt5) / 2;
    let b = (1 - sqrt5) / 2;
    return Math.round((Math.pow(a, n) - Math.pow(b, n)) / sqrt5);
}

function loop(n) {
    if (n<=2) {
        return 1;
    }
else {
    let a = 1;
    let b = 1;
    let res = 0;
    for (let i = 2; i < n; i++) {
        res = a + b;
        a = b;
        b = res;
    }

    return res;
}
    }
    
    function fib_arr(n) {
        let fib_arr = [1, 1];
        for (let i = 2; i < n; i++) {
            fib_arr[i] = fib_arr[i - 1] + fib_arr[i - 2];
        }
//   return fib_arr;
return fib_arr[fib_arr.length - 1];
    }
print('Recursion: ' + fib(n));
print('Formula Bine: ' + bine(n));
print('Сycle: ' + loop(n));
print('Loop + array: ' + fib_arr(n) + '<br>');