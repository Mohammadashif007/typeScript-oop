"use strict";
{
    function getUser(user) {
        if ("role" in user) {
            console.log(`The name is ${user.name} and role is ${user.role}`);
        }
        else {
            console.log(`The name is ${user.name}`);
        }
    }
    const normalUser = {
        name: "Joe"
    };
    const adminUser = {
        name: "Josh",
        role: "security"
    };
    getUser(normalUser);
}
