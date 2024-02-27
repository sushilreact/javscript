
// const user= {
//     username: "Sushil",
//     lastname:"Pal",
//     funmessage: function(num){
//           console.log(`My Name is ${this.username} and lastname is ${this.lastname} and my age is ${num}`)
//     }
// }
// user.username= "Raghav"
// user.funmessage(7)

// function noAccess(){
//     const username ="sushil"
//     console.log(this.username)
// }
// noAccess()


// const noAccess = () =>{
//     const username ="sushil"
//     console.log(this.username)
// }
// noAccess()

// Implicit Return Function

// const add = (num1,num2) => console.log(num1+num2)
// add(3,5)

const add = (num1,num2) => (console.log(num1+num2))
add(1,5)