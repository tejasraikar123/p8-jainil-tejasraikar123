const cache = new Map();
function memoize(fn){
    
    return function (...args){
        console.log(args);//! [1,2] is output

        const key = args.toString();//converted to string 
        console.log
        console.log(`fn called with ` + key);
        console.log(cache);
        if (cache.has(key)){
            return cache.get(key);
        }
        cache.set(key,args[0] + args[1]);
        
        return cache.get(key);
    };
    


}


function add(a,b){
    const add = (a,b) => {
let sum = a + b;
return sum;
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