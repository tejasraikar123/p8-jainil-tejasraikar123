
let employee1 = {
    name: "Tejas",
    bulbsold: "5",
    intro: function() {
    console.log(this.name + " sold " +  this.bulbsold + " classic Light bulbs ");
},
};

let employee2 = {
    name: "shreyas",
    bulbsold:"10",
};


let sales = employee1.intro.bind(employee2);
sales();



