// Задание №9. Создайте массив с произвольными элементами(числами). 
// Увеличьте каждый элемент массива на единицу. Выведите итоговый массив 
// в документ или в консоль.


// Создаем массив с произвольными элементами (числами)
let myArray = [2, 5, 8, 10, 3];

// Увеличиваем каждый элемент массива на единицу
let incrementedArray = myArray.map(function(element) {
    return element + 1;
});

// Выводим в консоль итоговый массив
console.log("Исходный массив:", myArray);
console.log("Итоговый массив после увеличения на единицу:", incrementedArray);
