function createIncrement(){
    let count = 0;
    function increment(){
        count++;
    }
let message = `Count is ${count}`;

function log(){
    console.log(message);
}
    return [increment,log];
}
increment();
increment();
increment();
log();
// inreament is not defined   output 


