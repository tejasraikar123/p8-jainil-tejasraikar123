const getNumber = new Promise((resolve, reject) => {
    
    let x = Math.random();
    console.log(Math.random());
      
    if (x % 5 == 0) {
        resolve("promise has been resolved ");
    } else {
        reject("promise has been rejected ");
    }
  });
  
  getNumber.then(result => {
    console.log(result);
    return result;
  }).then(result => {
    // do something with the result
  }).catch(error => {
    console.log(error);
  });
  