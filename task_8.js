let map = new Map();
map.set('apple', 'green');
map.set('blood', 'red');
map.set('milk', 'white');
map.set('sun', 'yellow');

for (let key of map.keys()) {
    console.log(`Ключ - ${key}, значение - ${map.get(key)}`);
}