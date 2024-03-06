// function greet(){
//     return "hello";
// }
// let a=greet();
// console.log(a);



// let greet=()=>"hello";
//  console.log(greet());


// let greet=(name)=>"Hello "+name;
// console.log(greet("ram"))

function add(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}
function mul(a,b){
    return a*b;
}
function div(a,b){
    return a/b;
}

let calculater=(a,b,operation)=>{
    return operation(a,b);
}
console.log(calculater(10,5,add));