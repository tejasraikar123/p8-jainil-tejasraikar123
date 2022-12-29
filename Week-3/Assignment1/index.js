function memoize(fn){
    const cache = new Map();
    return function (...args){

        const key = args.toString();
        console.log(`fn called with ` + key);
        console.log(cache);
        if (cache.has(key)){
            return cache.get(key);
        }
        cache.set(key, fn(...args));
        return cache.get(key);
    };


}


function add(a,b){
    const add = (a,b) => {
let sum = a + b;
console.log(sum);
}
}

function time(fn){
    console.time();
    fn();
    console.timeEnd();
}

const addM = memoize(add);

time(() => addM(1,2));
time(() => addM(1,2));
time(() => addM(1,2));