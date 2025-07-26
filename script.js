function calculator(){

let Tamil = parseFloat(prompt("Enter Your Tamil Mark :"));
let English = parseFloat(prompt("Enter Your English Mark "));
let Maths = parseFloat(prompt("Enter Your Maths Mark"));
let Science = parseFloat(prompt("Enter Your Science Mark"));
let Social = parseFloat(prompt("Enter Your Social Mark"));

if (
    isNaN(Tamil) ||
    isNaN(English) ||
    isNaN(Maths) ||
    isNaN(Science) ||
    isNaN(Social) 
    ) {
    alert("Invalid input! Please enter numeric values only.");
}

else {
    let total = Tamil + English + Maths + Science + Social;
    let average = total / 5;
    let grade = "";
    



    if (average >= 90) {grade = "A+";}
    else if (average >= 80) {grade = "A";}
    else if (average >= 70) {grade = "B";}
    else if (average >= 60) {grade = "C";}
    else if (average >= 50) {grade = "D";}
    else  {grade = "F";}



    alert(`Total : ${total}\n Average : ${average}\n Grade : ${grade}`);
}
}