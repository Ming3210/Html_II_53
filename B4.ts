function displayNumbers(time:number,callback:Function):number{
    setTimeout(()=>{
        callback(time)
    },
    1000)
    console.log(`Số thứ tự : ${time%999}`);
    
    return time;
}
let number:number = 1000;
function increase(time:number) : void {
   time = time + number
   displayNumbers(time,increase)
}
displayNumbers(1000,increase)