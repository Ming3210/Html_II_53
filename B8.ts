function myFind(arr:number[],number:number,callback:Function){
    callback(arr,number)
}

const numbers:number[] = [1,2,3,4,5,6,7,8]

myFind(numbers,2,(arr:number[],number:number)=>{
    console.log(arr[+number-1]);
})