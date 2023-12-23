const howSum = (targetSum,numbers) => {
    let table = Array(targetSum+1).fill(null);

    table[0] = [];
    for(let i=0;i<=targetSum;i++){
        if(table[targetSum]===null && table[i]!==null){
            for(let num of numbers){
                table[num+i] = [...table[i],num];
            }
        }
    }

    return table[targetSum];
}

console.log(howSum(7,[5,3,4]));
console.log(howSum(8,[2,3,5]));
console.log(howSum(300,[7,14]));