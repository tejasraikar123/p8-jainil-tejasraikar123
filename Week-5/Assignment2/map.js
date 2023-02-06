function vowelCount(str) {
    let vowels = new Map();
    vowels.set("a", 0);
    vowels.set("e", 0);
    vowels.set("i", 0);
    vowels.set("o", 0);
    vowels.set("u", 0);
    
    for (let i = 0; i < str.length; i++) {
      let char = str[i].toLowerCase();
      if (vowels.has(char)) {
        vowels.set(char, vowels.get(char) + 1);
      }
    }
    
    return vowels;
  }

  // The function has Time Complexity of O(n) 
  // and Space Complexity of O(1) 
  // as it only uses a fixed set of 5 vowels.