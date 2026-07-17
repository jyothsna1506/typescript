let userName: string ="Jyothsna";
let userAge: number = 20;
let isMember: boolean = true;

console.log("Data type of userName is: "+typeof userName);
console.log("Data type of userAge is: "+typeof userAge);
console.log("Data type of isMember is: "+typeof isMember);

function displayUserInfo(name:string , age:number,member:boolean):void{
    console.log("User Name: "+name);
    console.log("User Age: "+age);
    console.log("Is Member: "+member);
}

displayUserInfo(userName , userAge , isMember);