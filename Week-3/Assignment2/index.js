var counter = 
{
  count: 0, 
  inc: function ()
  {
    this.count++;
  }
}

setTimeout(counter.inc,1000);
setTimeout(() => {
    console.log(counter.count);
}, 2000);