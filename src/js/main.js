const listFruits = [
    "apple", //0
    "orange", //1
    "banana", //2
    "grape", //3
    "strawberry", //4
    "kiwi",
    "pineapple",
    "watermelon",
    "mango",
    "pear",
    "peach",
    "plum",
    "cherry",
    "blueberry",
    "raspberry",
    "blackberry",
    "lemon",
    "lime",
    "coconut",
    "pomegranate" //19
];
console.groupCollapsed("For Each")
//For Each: Me trae la llave y el valor
// Print list with classic for
for (let i = 0; i < listFruits.length; i++) {
    console.info(listFruits[i]);
}

console.error("Line Break")

// listFruits.forEach(fruit => {
//     console.info(fruit);
// });

listFruits.forEach(function (element) {
    console.info(element)
})

//Lowercase list
listFruits.forEach(element => {
    console.info(element.toLowerCase());
});

//Uppercase list
listFruits.forEach(element => {
    console.info(element.toUpperCase());
});

console.groupEnd()

console.groupCollapsed("For In")
//For In: Me trae solo la llave
for (const key in listFruits) {
    console.log(key)
}

console.error("Line Break")

for (const key in listFruits) {
    console.log(listFruits[key])
}

console.error("Line Break")

listFruits.forEach((fruit, key) => {
    console.info("The Fruit " + fruit + " is in the position " + key)
});

console.groupEnd()

console.groupCollapsed("For Of")
//For Of: Me trae solo el valor
for (const fruit in listFruits) {
    console.log(fruit);
}

console.groupEnd()