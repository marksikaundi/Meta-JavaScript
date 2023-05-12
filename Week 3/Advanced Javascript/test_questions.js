
// // class Cake {
// //     constructor(lyr) {
// //         this.layers = lyr;
// //     }

// //     getLayers() {
// //         return this.layers;
// //     }
// // }

// // class WeddingCake extends Cake {
// //     constructor() {
// //         super(2);
// //     }

// //     getLayers() {
// //         return super.getLayers() * 5;
// //     }
// // }

// // var result = new WeddingCake();
// // console.log(result.getLayers());


// class Animal {

// }

// class Dog extends Animal {
//     constructor() {
//         this.noise = "bark";
//     }

//     makeNoise() {
//       return this.noise;
//     }
// }

// class Wolf extends Dog {
//     constructor() {
//         super();
//         this.noise = "growl";
//     }
// }

// var result = new Wolf();
// console.log(result.makeNoise());


function count(...food) {
    console.log(food.length)
}

count("Burgers", "Fries", null);
