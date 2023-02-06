function Stack(){
    var items = [];
    var top = 0;
    //other methods go here
 
    //Push an item in the Stack
    this.push = function(element){
      items[top++] = element
    }
    //top++, first performs the operation then increment's the value     
 
    //Pop an item from the Stack
    this.pop = function(){
      return items[--top];
    }
    //--top, first decrements the value then performs the operation
     
    //Size of the Stack
    this.size = function(){
      return top;
    }
  };
  var Stack = new Stack();
Stack.push(10);
Stack.push(5);
Stack.pop();
console.log(Stack.size());

