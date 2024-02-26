const mySym = Symbol("key3")
const studentList ={
    name:"sushil",
    "lastname":"kumar",
    [mySym]:"key1",
    address:"PAU Dashmesh Nagar Ludhiana",
    phonenumber: 7087096884,
    rollnumber: 567412
}

// Object.freeze(studentList)
// studentList.address= "Ayali Khurd"

studentList.mycallfun = function(){
    console.log(`Hello My name is ${this.name} and my address is ${this.address}`)
}

console.log( studentList.mycallfun())