// insertion Sorting algorithm // 

let arry = [5,4,3,2,1];
for (var i = 0; i < arry.length; i++){
    const value= arry[i];
    let hole = i;
    while(hole > 0 && arry[hole-1] > value ){
        arry[hole] = arry[hole-1];
        hole = hole-1;
    }
    arry[hole] = value;
}
console.log(arry)