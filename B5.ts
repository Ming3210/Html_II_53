function checkCondition(condition:Function,callback:Function){
    let result = condition();
        callback(result);
    
}
function displayResult(result:boolean):boolean{
    console.log(result);
    return result;
}

function con(){
    const number = 5;
    return number > 10;
}

checkCondition(con,displayResult);