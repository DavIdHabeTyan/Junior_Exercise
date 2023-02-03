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

//'лон, ес' 233