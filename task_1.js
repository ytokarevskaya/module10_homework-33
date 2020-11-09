let input = +prompt('Введите число: ');

if (typeof input === 'number' && !isNaN(input)) {
    if (input % 2 === 0)
        alert('Это четное число');
    else if (input === 0)
        alert('Это ноль')
    else
        alert('Это нечетное число');
} else {
    alert('Упс, кажется, вы ошиблись')
}