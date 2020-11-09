let array2 = ['str', 'str', 'string', 'str'];

for (let i = 1; i < array2.length; i++) {
    if (array2[0] !== array2[i]) {
        console.log(false);
        break;
    } else if (i === array2.length - 1) {
        console.log(true);
    }
}