// for (let i = 1; i <=10; i++) {
//     const element = i;
//     if(element===5){
//         console.log(`hello I am printing with ${element}`);
//     }
//     else{
//         console.log(element);
//     }
    
// }


/*Table Print 1 to 10 Program help with for loop */

// for (let i = 1; i <= 10; i++) {
//     console.log(`This is table ${i}`)

//     for (let j = 1; j <= 10; j++) {
//        console.log(`${i} * ${j} = ${i*j}`);
        
//     }
    
// }

let star = ""
for (let i = 1; i <= 5; i++) {
   
    for (let j = 1; j <= i; j++) {
        star += "*"
        
    }
    
    star = "\n"
}
console.log(star)