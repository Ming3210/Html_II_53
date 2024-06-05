function myFindIndex(arr:number[], value:number, callback:Function) {
    let result:number;
    for (let i = 0; i < arr.length; i++) {  
        if (callback(arr[i], value)) {
            result = i;
            console.log(result);
            
            return result
        }
    }
        result = -1;
        console.log(result);
        return result
}
let subArr1:number[] = [1,2,2,1,5,9,3,3,4,5,6,7]

myFindIndex(subArr1,3,(element:number, value:number) => element === value)