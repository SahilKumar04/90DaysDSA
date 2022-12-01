function my_fun(array){
    console.log(array);

    for(let i=0; i<array.length; i++){
        console.log(array[i]);
        for(let j=0; j<array.length; j++){

            if (array[j+1] < array[j]){
                [array[j+1], array[j]] = [array[j],array[j+1]]; 
            }
        }
    }
    return array;

}

console.log(my_fun([6,1,3,2,8,9]));


function bubbleSort(arr){

    //Outer pass
    for(let i = 0; i < arr.length; i++){

        //Inner pass
        for(let j = 0; j < arr.length - i - 1; j++){

            //Value comparison using ascending order

            if(arr[j + 1] < arr[j]){

                //Swapping
                [arr[j + 1],arr[j]] = [arr[j],arr[j + 1]]
            }
        }
    };
    return arr;
};

console.log(bubbleSort([6,1,3,2,8,9]));
