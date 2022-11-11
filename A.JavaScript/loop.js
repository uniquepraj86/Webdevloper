//even using for and if else
// {
//   for (let i = 1; i < 10; i++) {

//     if (i % 2 == 0)
//     {
//       console.log(i);
//     }
//   }
// }
// ********************************************************************************************
//odd using for and if else
// {
//   for (let i = 1; i < 10; i++) {

//     if (i % 2 != 0)
//     {
//       console.log(i);
//     }
//   }
// }
//***************************************************************************************8 */
// summation using while loop 
// {
//  let a = 1234567891234;
//  let sum = 0;
//  while(a !=0)
//  {
//   sum+=a%10;
//   a = parseInt(a/10);
//  }
//  console.log(sum);
// }
// For Loop odd 
// {
//   let i= 1;
//   for(i=1;i<=5;i++)
//   {
//     console.log(i);
//     i++;
//   }
// }
//*************************************************************************************** */
// while loop odd
// {
//   let a=1;
//   let a=0;
//   let c=0;
//   while(a<=10)
//   {
//     c=a%2;
//     if(c!=0)
//     {
//       b=b+a;
//       console.log(a);
//     } 
//      a++;
//   }
// }
//********************************************************************************** */
// {
// let data=[10,20,30,40,50];
// let Birds=["pecock","parrot","sparrow","crow"]

// for of
// for(let val of Birds){
//   console.log(val)
// }
// for each

// data.forEach((datas)=>{
  
//   console.log(datas)});
// }

//   //for in
  // for(let p in Birds){
  //   console.log(p)
  //   // for(let names of Birds){
  //   //   console.log(names)
  //     Birds.forEach(( element,index)=>
  //     {
  //       console.log(element,index)
  //     })
  //   }
  // }
// }
/************************************************************************************************* */

// Passing Multiple parameter

// function display(...values)
// {
//   return values;
// }

// console.log(display("A","B","c", 1,2,2) );    ======>>>>  //"A","B","c", 1,2,2

// {
//   function display(...values)
//   {
//     return values;
//   }
//  console.log(display("myName-unique Praj,Address-pune"));  //myName-unique Praj,Address-pune 
// }
// ********************************************************************************************
// how we can pass default parameter (True,False,Undefined)
// function display(file1,file = "By Default")
// {
//   return file1,file;
// }
// const val= display();
// console.log(val);

// *******************************************************************************************

const car={
  brand:"Audi",
  color:"Black",
  price:1000000
}
const car1={
  ...car,
  type:'Auto'
}
console.log(car1)

for(let key in car){
  console.log(key+" :"+car[key])
}
// ****************************************************************************************
function checkName(names ,...name1)
{
  console.log(names,name1)
}
  checkName('p','q','t','h')

// ****************************************************************************************
//Rest parameter

 const contries=["India","US","Algeria"]
 const contries1=["Italy","Iran"]
 {
   
 }
 console.log(...contries,...contries1);

// *****************************************************************************************
// object     8/8/2022

let inf=[
  {
    id:"1",
    name:"praj",
    address:"Pune"
  },
]
 const pqr=[                                                                                                                          
 {
    ...inf,
    homeTown:"Akole"
  }
 ]
console.log(pqr);

// ********************************************************************************************
  // assignment deconstruct   9/8/2022

 let fruits=['apple','orange']
 let [f1,f2]=fruits;
 console.log(f1);
 console.log(f2);

// ********************************************************************************************
// object deconstruct       9/8/2022

const person={
  id:1,
  name:"praj",
  addr:"pune"
}
const {id,name,addr}=person
console.log(id,name,addr)

/**************************************************** */
//  outside closer            10/9/2022

function display()
{
  let value = 100;
  function test()
  {
    console.log(value);
  } 
   return test;
}
 let test =display();     
 test ();              //**************100*************

// ******************************************************
// write the program swap the number
{
  var a = 5;
  var b = 10;
 //  output b = 5; a=10
     var c = b;     // c=10
     b=a;             //b=5
     a=c;
     console.log("the value of a is "+a);
     console.log("the value of b is "+b);

 }



