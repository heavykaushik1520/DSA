let arr = [12 , 35 , 1 , 10 , 34 , 1];
let n = arr.length ;
print2largest(arr , n);

function print2largest( arr , arr_size){
    arr.sort();
    console.log("sorted array :" + arr.sort());

    
    arr.reverse(arr.sort());

    console.log("revesred sorted array :" + arr.reverse(arr.sort()));

    for(let i = 1 ; i < arr_size ; i--){
        if(arr[i] != arr[0])
        {
            console.log("The Second largest element : " + arr[i]);
            return ;
        }
    }

    console.log("There is no second largest element");
}