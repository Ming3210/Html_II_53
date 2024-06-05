function  processArray(arr:number[],callback:Function) {
    
    for (const value of arr) {

        console.log(`Phần tử thứ: ${value}`);   
    }
}
processArray([1,2,3,4,5],(num:number)=>num)