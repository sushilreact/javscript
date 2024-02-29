// // const newUser =[34,56,86,96,97,96,96,54]

// // for (const user of newUser) {
// //     console.table(user)
// // }

// const StringData= "Hello Sushil pal My name is"
// for (const data of StringData) {
  
//     if(data=== " ")
//     {
//        // console.log(`Each Text Demo`)
// }
//     else{
//         console.log(`Each Text ${data}`)
//     }
// }

// const newUser =[34,56,86,96,97,96,96,54]

// for (const user of newUser) {
// console.table(user)
//  }


// const maploop = new Map()

// maploop.set('a', 3)
// maploop.set('b', 5)
// maploop.set('c', 56)
// maploop.set('d', 67)
// maploop.set('d', 67)
// maploop.set('c', 56)

// for (const [keys,values] of maploop) {
   
//     console.log(keys)
    
// }

const myobject ={
    game:"anifex",
    game2:"spiderman",
    game3: "junim"
}


// for (const [key, value] of myobject) {
//     console.log(value)
// }

// for (const key in myobject) {
//    console.log(`${key} -=> ${myobject[key]}`)
// }

const programing = ["js","c++","c","python","swift for app","ruby"]

// for (const key in programing) {
//    console.log(`${key} this value ${programing[key]}`)
// }


// programing.forEach((item,key)=>{
//     console.log(`${item} ${key}`)
// })

// function printMe(item){
//     console.log(item)
// }

// programing.forEach(printMe)


// const myEmployee = [    
//     {"name":"Ram", "email":"ram@gmail.com", "age":23},    
//     {"name":"Shyam", "email":"shyam23@gmail.com", "age":28},  
//     {"name":"John", "email":"john@gmail.com", "age":33},    
//     {"name":"Bob", "email":"bob32@gmail.com", "age":41}   
// ]

// myEmployee.forEach((item)=>{
//     console.log(item.email)
// })

const myemp= {"employees":[    
    {"name":"Ram", "email":"ram@gmail.com", "age":23},    
    {"name":"Shyam", "email":"shyam23@gmail.com", "age":28},  
    {"name":"John", "email":"john@gmail.com", "age":33},    
    {"name":"Bob", "email":"bob32@gmail.com", "age":41}   
]}  
const myObj= JSON.parse(myemp)

myObj.forEach((item)=>{
    console.log(item.email)
})