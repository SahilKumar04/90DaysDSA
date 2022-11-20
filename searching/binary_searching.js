/**
 * Binary Searching Method
 * it applies only in monotonic arrar's that means 
 * that array elements are in sorting order ie. in asc,desc order
 * 
 */
const array1 = [2,4,55,25,77,90]
const checkValue  = 25
array1.sort(function(a, b){return a-b})
console.log(array1)
function my_fun(array1, size , value ){
    let start = 0;
    let end = array1.length - 1;
    let mid = Math.floor(start + (end - start) / 2);

    while(start <= end){
        if(array1[mid] === value){
            return mid;
        }
        if ( array1[mid] < value){
            start = mid + 1 
        }else{
            end = mid - 1
        }
        mid = Math.floor(start + (end - start) / 2);


    }
    return -1;
}
console.log(my_fun(array1, array1.length, checkValue));








console.log(array1.sort((a, b) => b - a))
console.log(array1.sort(function(a, b){return a-b}))
console.log(array1.sort()) // not return well statisfied array
console.log(array1.reverse())// not return well statisfied array