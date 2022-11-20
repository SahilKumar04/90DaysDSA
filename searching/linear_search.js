const checkElement = 34
const array1 = [2,34,56,66,65,56]

// ways to check wheater element present or absent
// 1.
for (let i = 0; i < array1.length; i++){
    if (checkElement == array1[i]){
            console.log('true')
    }else{
        console.log('false');
    }
}
// 2.
// shortcut way to check element present or not 
console.log(array1.includes(checkElement))

// get index or location of that value 
console.log(array1.indexOf(checkElement));