function delayedCallback(callback: Function, delay:number){
    let result :number;
    setTimeout(()=>{
        result = callback();
        console.log(result);
    },delay)
}

delayedCallback(()=>{
    return "2s";
},2000)