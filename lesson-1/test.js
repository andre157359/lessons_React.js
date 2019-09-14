let names = ['IVAN', 'Anna', 'Kriss', 'Pety', 'Goha', 'Ann'];

let shorhNames = names.filter((name) => {
    return name.length <= 3
});
console.log(shorhNames);



let answers = ['IVAN', 'AnNa', 'KrIss', 'PetY', 'Goha', 'Ann'];

answers = answers.map((item) => item.toLowerCase());

console.log(answers);

let name = 'Ivan'
let age = '20'

console.log(`Пользователь ${name} его возраст ${age}лет`);


function feachData(data, count = 0) {
    console.log(`Данные: ${data} в количестве ${count}`)
    
}
feachData('something');


function max (a, b,...numberes) {
    console.log(numberes);
    
}

max (3, 10, 20, 99, 92255, 2, 254, 21451, 2645, 152, 5458, 55);


const arr1 = [1, 2, 5],
      arr2 = [50, 90, 0];

const res = Math.max(555,...arr1, ...arr2);

console.log(res);


let x = 10, y = 15
let coords = {x, y, 
    calcSq() {
        console.log(this.x*this.y);
        
    }
 } 

 coords.calcSq();
console.log(coords);



const user = {
    name: {
        first: 'Sam', 
        lastname:'Smit'
    },
    pass: 'qwerty',
    rigths: 'user'
};

const {name:{first, lastname}, rigths} = user;

console.log(first, rigths);
