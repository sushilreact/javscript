
//  Note For Default value Set
// function addValu(num1= 1,num2=3){
//       const result = num1+num2
//       return console.log(result)
// }

// addValu(4)


// Note Store Multiple argument in array with rest Operator 

// function storeasArray(...argument){
//     return argument

// }

// console.log(storeasArray(234,454,4543,34,64,26))


// Note how to pass object in function

// const user = {
//     username:"Sushil",
//     lastame: "Pal",
//     phonenumber:708790054

// }

// function accessObject(anyObject){
//    return console.log(`My name is ${anyObject.username} and last name ${anyObject.lastame} or phone number is ${anyObject.phonenumber}`)
// }

// accessObject(user)

/// Note How to pass array in function

const arrayContainer= [34,56,75,86,56,85,4]

function returnArraySecond(anyArray){
     return anyArray
}

console.log(returnArraySecond(arrayContainer[5]))