function calculate(num1: number, num2: number,callback: Function){
    let result:number;
    result = callback(num1,num2);
    return result;
}

function add(num1: number, num2: number){
    return num1+num2;
}
console.log(calculate(2,4,add));
