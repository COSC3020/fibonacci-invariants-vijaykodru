function fib(n) {
    if(n === 0){
        return [0];
    }
    if(n === 1){
        return[0,1]
    }
    else{
        var a = fib(n-1);
        a.push(a[n-1]+a[n-2]);
        return a;
    }
}