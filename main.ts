//array(string)
let employeeName:string[]=["razia","saad","ahmed","muhammad","fahad"];
employeeName.push("haris");
employeeName.pop();
employeeName.shift();
employeeName.unshift("sadia");
employeeName.splice(1,3);
console.log(employeeName);
//array(numeric)
let employeeSalary:number[]=[1,2,3];
employeeSalary.push(4);
employeeSalary.pop();
employeeSalary.shift();
employeeSalary.unshift(5);
employeeSalary.splice(0,2);
console.log(employeeSalary);
//array tuple(type array i.e string,boolean,numeric)
let arrayName:[string,number,boolean]=["mahad",2,false];
arrayName.push("saad",6,true),
console.log(arrayName);
