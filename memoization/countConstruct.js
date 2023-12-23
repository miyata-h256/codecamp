
const countConstruct = (target,wordBank,memo={}) => {
    if (target in memo) return memo[target];
    if (target === '') return 1;

    let count = 0;
    for(let word of wordBank){
        if(target.indexOf(word) === 0){
            const numWaysForRest = countConstruct(target.slice(word.length),wordBank,memo);
            count+=numWaysForRest;
        }
    }
    memo[target] = count
    return count;//1よりも大きい数値で返却されることがある
}

console.log(countConstruct("abcdef",["ab","abc","cd","def","abcd"]));
console.log(countConstruct("purple",["purp","p","ur","le","purpl"]));
console.log(countConstruct("skateboard",["bo","rd","ate","t","ska","sk","boar"]));
console.log(countConstruct("enterapotentpot",["a","p","ent","enter","ot","o","t"]));
console.log(countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef",[
    "e",
    "ee",
    "eee",
    "eeee",
    "eeeeee",
    "eeeeeee"
]))
