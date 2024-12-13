const removeElement = (array, ...items) => {
    items.forEach(item => {
        const index = array.indexOf(item);
        if (index !== -1)
        {
            array.splice(index, 1);
        }
    });
}
let array = ['Kiev', 'Beijing', 'Lima', 'Saratov'];
removeElement(array, 'Lima');
removeElement(array, 'Berlin');
console.log(array);
array = [1, 2, 3, 4, 5, 6, 7];
removeElement(array, 5);
console.log(array);

const unique = (array) => {
    return array.filter((item, index) => array.indexOf(item) === index);
}
let result = unique([2, 1, 1, 3, 2]);
console.log(result);
result = unique(['top', 'bottom', 'top', 'left']);
console.log(result);