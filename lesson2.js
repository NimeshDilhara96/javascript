const age="20";

if (age>=18){
    console.log("Adult");
}
else{
    console.log("Minor");
}

// Equality test (===)
const num=5;

if(num === 5){
    console.log("equal");
}
else{
    console.log("not equal");
}

//Logical operator – AND (&&)

const isloggedIn=true;
const isAdmin=false;

if(isloggedIn && isAdmin){
    console.log("admin dashboard");
}
else{
    console.log("no admin access");
}

//Logical operator – OR (||)

if(isloggedIn || isAdmin){
    console.log("user has some access");
}
else{
    console.log("no access");
}