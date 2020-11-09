let array3 = [4, 3, 'str', 6, null, 8, '-', 0, 'str2', 9];
let evenCount = 0;
let oddCount = 0;
let zeroCount = 0;

for (let i = 0; i < array3.length; i++) {
    if (typeof array3[i] === 'number') {
        if (array3[i] === 0)
            zeroCount += 1;
        else if (array3[i] % 2 === 0)
            evenCount += 1;
        else
            oddCount += 1;
    }
}

console.log(`Количество четных элементов - ${evenCount}\nКоличество нечетных элементов - ${oddCount}
Количество нулей - ${zeroCount}`);