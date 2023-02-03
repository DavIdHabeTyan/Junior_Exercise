// input 'яблоко, слон, дуб, лес', 13;
//output 'лон, ес', 233


const getSlicedString = (str) => {
   return str.split(', ').reduce((acc, val, idx) => {
        if(idx % 2 !== 0) {
            acc.push(val.slice(1, val.length));
        }
        return acc;
    },[])
}
const getFibonachiNumber = (numb) => {
    let f1 = 1;
    let f2 = 1;
    for(let i = 3; i <= numb; i++){
        const f3 = f1 + f2;
        f1 = f2;
        f2 = f3;
    }
    return f2
}

const getSomData = (str, numb) => {
    const slicedString = new Promise((resolve, reject) => {
        resolve(getSlicedString(str));
    })
    const fibonachi = new Promise((resolve, reject) => {
        resolve(getFibonachiNumber(numb))
    })
    return Promise.all([slicedString, fibonachi])
};

getSomData('яблоко, слон, дуб, лес', 13).then(data => console.log(data))



const obj = {
    name: 'David',
    age: 21,
}

const strObj = JSON.parse(JSON.stringify(obj));
console.log(strObj)


function test(a, b) {
    if(a % 2 === 0 && b % 2=== 0) {
        console.log(a * b)
    }
    else if (a % 2 !==0 && b % 2 !== 0){
        console.log(a + b)
    }
        console.log(a % 2 ? a : b)
}

test(2, 3)


const food = [
    {name: 'pasta', wight: 350, price: 60, quantity: 10},
    {name: 'spagedi', wight: 350, price: 56, quantity: 8},
    {name: 'spagedi', wight: 400, price: 68, quantity: 16},
    {name: 'spagedi', wight: 675, price: 139, quantity: 30},
    {name: 'spagedi', wight: 1600, price: 339, quantity: 8},
    {name: 'spagedi', wight: 740, price: 159, quantity: 1},
    {name: 'spagedi', wight: 230, price: 77, quantity: 4},
    {name: 'spagedi', wight: 230, price: 69, quantity: 5},
];

const filterFood = food.filter(elem => elem.price > 80)
    .filter(elem => elem.quantity < 7)
    .reduce((acc, val) => {
      return acc +( val.wight * val.quantity);

    },0)

console.log(filterFood)



