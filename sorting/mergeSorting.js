//////////////////// merge sorting //////////////////////////////////
let arry = [30,45,56,11,22,47,32,20];
console.log(my_fun(arry));
function my_fun(arry){
    let n = arry.length
    let left =[]
    let right = []
    if (n < 2) return ;
    mid = Math.round(arry.length/2)
    for (let i = 0; i < mid; i++) left.push(arry[i])
    for (let i = mid; i < arry.length; i++) right.push(arry[i])
    my_fun(left);
    my_fun(right);
    return merge_fun(left,right,arry)
}
function merge_fun(left,right,arry) {
    let nl = left.length;
    let nr = right.length;
    let i = 0;
    let j = 0;
    let k = 0;
    while (i < nl && j<nr){
        if (left[i] <= right[j]){
            arry[k] = left[i];
            i++;
        }else{
            arry[k] = right[j];
            j++;
        }
        k++;
    }
    while(i < nl){
        arry[k] = left[i];
        i++;
        k++;
    }
    while(j < nr){
        arry[k] = right[j];
        j++;
        k++;
    }
    return arry;
}

