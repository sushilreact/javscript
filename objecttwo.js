// Siglton Objects

// const faceBookuser = new Object()  // This is Singlton Objects

// console.log(faceBookuser)

 const regularUser = {
    email :"s@gmail.com",
    userfullname:{
        fullname:"sushil",
        lastname:"pal"
      },
      address:{
        useraddress:"PAU Dashmesh Nagar",
        contactinfor:{
                 mobilenumber: 4564646454,
                 homeNumber:4554654

        }
      }

 }

 const teacher={
    teachername:{
        name:"rohen",
        lastname:"kumar"
    },
    teacheraddress:"Partap College"
 }

 const newArrr= {...regularUser, ...teacher}

 const newObjectAssign= Object.assign({}, regularUser,teacher)

//  console.log(Object.keys(newObjectAssign))
//  console.log(Object.values(newObjectAssign))
//  console.log(Object.entries(newObjectAssign))
 console.log(newObjectAssign.hasOwnProperty('teachername'))