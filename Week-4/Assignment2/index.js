var Person = function(name, age){
    this.name = name;
    this.age = age;
 
}

Person.prototype.initialize = function()
{

    console.log(this.name +  " is "  + this.age + " years old")
  
    
    
};




class Teacher {
    constructor(name, subject) {
        this.name = name;
        this.subject = subject;
     }
    teach() {
        
        console.log(`${this.name}` + " is now teaching " + this.subject);
      }
    
  };

  var him = new Person("Adam", 35);
  him.initialize();
  
  var him1 = new Teacher("Adam", "History");
  him1.teach();

  //not able to use below because object needs to be called seperately him and him1 
// him.initialize("Adam", 35);
// him.teach("inheritance");