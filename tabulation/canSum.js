const canSum = (targetSum,numbers) => {
    const table = Array(targetSum+1).fill(false);
    table[0]=true;

    for(let i=0;i<targetSum;i++){
        if(table[i] === true){
           for(let num of numbers){
                // if(table[num+i] === false) table[num+i] = table[i];//このコードだと何がしたいかわかりにくい
                table[num+i] = true;
            }
        }
    }
    return table[targetSum];
}

console.log(canSum(7,[2,3]));
console.log(canSum(7,[5,3,4,7]));
console.log(canSum(7,[2,4]));
console.log(canSum(300,[7,14]));