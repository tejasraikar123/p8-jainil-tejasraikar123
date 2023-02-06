function Stack() {
    this.items = [];
    this.top = 0;
  }
  
  Stack.prototype.push = function(element) {
    this.items[this.top++] = element;
  },
  

  Stack.prototype.pop = function(){
    return this.items[this.top--]
  }
  
  var stack = new Stack();
  stack.push(1);
  stack.pop();
  