function likeToEat(){
    var animal = [this.name,
    'likes to eat',
    this.preference].join(" ");
    console.log(animal);
}

var animal1 = {
    name: "lion",
    preference: "nonveg"
}

var animal2 = {
    name: "elephant",
    preference: "veg"
}

likeToEat.apply(animal1);
likeToEat.apply(animal2);