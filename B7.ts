function myForEach(arr:number[], callback:Function) {
    for (const value in arr) {
        callback(value,arr[value],arr);
    }
}

const subArr = [1, 2, 3, 4, 5];

myForEach(subArr, (element:number, index:number, arr:number[]) => {
    console.log(`Vi tri: ${element} | Phan tu: ${index} | Mang: ${arr}`);
});