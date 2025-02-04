// console.log('script added');

/*function mySkill(){

document.write('HTML </br>')
document.write('CSS </br>')
document.write('Tailwind Css </br>')
document.write('JavaScript <br>')
document.write('-------------------End----------</br>')

}
mySkill();
mySkill();
mySkill();
mySkill();
*/


/*
function calculateAddition(){

    let num1 =10;
    let num2 =5;

    document.write(`Total sum:${num1 + num2} </br>`)
    document.write(`Total multiple:${num1 * num2} </br>`)
    document.write(`Total devided:${num1 / num2} </br>`)
    document.write(`Total minus:${num1 - num2} </br>`)
    
}
calculateAddition();

*/

/*function calculation(){
    let num1 =10;
    let num2 = 20;
    let num3 =30;
    document.write(`total sum:${num1 + num2 + num3} <br>`);
    document.write(`total:${num1 * num2 * num3}`);
}
calculation();
*/


let person = prompt("Please enter your name", "Harry Potter");

if (person != null) {
  document.getElementById("demo").innerHTML =
  "Hello " + person + "! How are you today?";
}