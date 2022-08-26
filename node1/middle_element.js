//Input Array
var arr = [1,2,3,4,5]

function middleelement(arr){
//Finding the Length of the Array
var size = arr.length

//Calculating the Middle Index
var middle  = Math.floor(size/2);

//Returning the Middle Element
return arr[middle]

}

console.log(middleelement(arr))