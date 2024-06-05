function myFilter(arr:number[], value:number, callback:Function){
    let result = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], value)) {
            result.push(arr[i]);
        }
    }
    console.log(result);
    return result;
    
}

let array = [1, 2, 3, 4, 5];

myFilter(array, 3,(element:any, value:number) => element === value);