// recursion  of function in javascript
function my_fun(a,b){
    console.log('output :>> ', a,b);
    my_fun(3,2)// when this functions is not completed then it is called stack overflow
}

my_fun(3,2)

// // recursion  of function in javascript with some specific condition
// let count=0
// function my_fun(a,b){
//     if (count == 20) return
//     count++
//     console.log("waiting...")
//     my_fun(3,2)
// }
// my_fun(3,2)

// // recursion of value if we want to excuite the last one first (backtrack method)
// function  my_fun(i,n){
//     if ( i < 1 ) return
//     my_fun(i-1, n)
//     console.log(i)
// }

// my_fun(3,3)
// // output=>> 10,9,8,7,6,5,4,3,2,1