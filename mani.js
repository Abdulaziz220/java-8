let array = [2, 4, 9, 10, 45, 67, 8, 90, ("aralash son")];
console.log(array);


for (let i = 0; i < array.length; i++) {
    let check = array[i] % 2
    if (check === 0) {
        console.log(array[i], ("juft son"));
    } else { console.log(array[i], ("toq son")); }
}




// for(let i = 0; i < 10; i++){
//     console.log(hello world);
// }


// let array = [1, 2, 3, 4, 5, 6];
// let i = 0;

// while (i < array.length) {
//     console.log(array[i])
//     i++
// } 