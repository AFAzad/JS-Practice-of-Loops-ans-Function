let marks ={
    Raaz : 65,
    Lovesh:63,
    Harry :96,
    Monika:50
}
for (let i =0; i <Object.keys(marks).length;i++){
    console.log("The msrks of " + Object.keys(marks)[i] + " is " + marks[Object.keys(marks)[i]])
}
//Q no. 2. 
for (let key in marks){
    console.log("The msrks of " + key + "is " + marks[key])
}


//Q no. 3

let cn =43
let i
while (i != cn) {
    i = prompt("Enter the Password")
    console.log("Try again")
}
console.log("Your Password is correct");


// Q no. 4 
const mean = (a,b,c,d)=>{
    return(a + b+ c+d)/4
}
console.log(mean(4,5,6,7))