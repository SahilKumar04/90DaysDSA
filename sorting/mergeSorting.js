const left = [1,2,4,7]
const right = [5,6,8,9]
const array = [8,6,2,9,4,7,5,1]
console.log(mergeShort(array));
function mergeShort(array){
    let Left= [];
    let Right= [];
    let start = 0;
    if(array.length < 2) return;
    let end = array.length - 1;
    let mid = Math.floor(start + (end - start) / 2);
    for(let i=0;i<array.length;i++){
        if (i <= mid) Left.push(array[i]);
        if (i > mid) Right.push(array[i]);
    }
    mergeShort(Left)
    mergeShort(Right)
    return my_fun(Left,Right,array)
}
function my_fun(left, right, myArray){
    const nL= left.length;
    const nR= right.length;
    let i=j=k = 0;
    while (i < nL && j < nR){
        if (left[i] <= right[j]){
            myArray[k] = left[i]; 
            i++;
        }else{
            myArray[k] = right[j];
            j++;
        }
        k++;
    }
    while (i < nL){
        myArray[k] = left[i];
        i++;
        k++;
    }
    while (j < nR){
        myArray[k] = right[j];
        j++;
        k++;
    }
    return myArray;
}