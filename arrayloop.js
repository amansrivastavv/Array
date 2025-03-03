// Print Only Even Numbers from an Array
const numbers=[1,2,3,4,5,6,7,8,9,10];
// for (let i=0; i<numbers.length; i++){
//     if(numbers[i] % 2 === 0){
//         console.log(numbers[i]);
//     }
// }

// find the sum of all numbers in the array
// let sum = 0;
// for(let i = 0; i < numbers.length; i++){
//     sum += numbers[i];
// }

// problem: find the sum of all even numbers in the array
// let sum =0;
// for ( i=0; i<numbers.length; i++){
//     if(numbers[i] % 2 === 0){
//         sum += numbers[i];
//     }
// }


//problem find the largest number in the array
// let largest = numbers[0]
// for (let i=0; i<numbers.length; i++){
//     if((numbers[i])> largest){
//         largest=numbers[i];
//     }
// }


//problem find the largest number in the array
// let Smallest = numbers[0];
// for (let i=0; i<numbers.length; i++){
//     if(numbers[i]< Smallest){
//         Smallest= numbers[i];
//     }
// }
//  console.log(Smallest);

//problem: find the average of all numbers in the array
let sum =0;
for (let i=0; i<numbers.length; i++){
    sum += numbers[i];

}
let average = Math.ceil(sum/numbers.length);   
console.log(average);
