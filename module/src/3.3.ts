{
// typeof

// function add(param1: string | number, param2: string | number){
//     if(typeof param1 === "number" && typeof param2 === "number"){
//         return param1 + param2;
//     }
//     else{
//         return param1.toString() + param2.toString();
//     }
// }

// const result = add(7, "3");
// console.log(result);


// in guard

type NormalUser = {
    name: string
}
type AdminUser = {
    name: string;
    role: string
}

function getUser(user: NormalUser | AdminUser){
    if("role" in user){
        console.log(`The name is ${user.name} and role is ${user.role}`);
    }else{
        console.log(`The name is ${user.name}`);
    }
}

const normalUser = {
    name: "Joe"
}
const adminUser = {
    name: "Josh",
    role: "security"
}

getUser(normalUser);










}