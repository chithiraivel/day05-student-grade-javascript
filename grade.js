
// let name1=prompt("Enter your name :");
// let registerNo=prompt("Enter your RegisterNo");

// console.log("Name is " +name1);
// console.log("Register No " +registerNo);


// let marks=parseInt(prompt("Enter a Marks"));

// if(marks>=90 && marks<=100){
//     console.log("Grade A");
// }
// else if(marks>=80 && marks<90){
//     console.log("Grade B");
// }
// else if(marks>=60 && marks<80){
//     console.log("Grade C");
// }
// else if(marks>=40 && marks<60){
//     console.log("Grade E");
// }
// else{
//     console.log("Fail !!");
// }



let num=Math.floor(Math.random()*10)+1;
console.log(num);
let guess=parseInt(prompt("Enter a Number : "));

while(guess !=num){

 if(num<guess){
    console.log("number is greater ");
}
else{
    console.log("number is smaller");
}

 guess=parseInt(prompt("Enter a Number : "));

}

if(num==guess){
    console.log("Congratulations");
}












// let secretNo=Math.floor(Math.random() * 10) + 1;

// console.log(secretNo);

// let previousNo,guessNo;

// for( i=1;i<=5;i++){

//      guessNo=prompt("Enter number ");

//     if(guessNo > 9 || guessNo < 1){

//         console.log("out of range");
//          i=0;

//         continue;
//     }

//     if( previousNo == guessNo){

//         console.log("number is already entered :");
//         i=0;
//     }
//     else if(guessNo > secretNo){
//         console.log("Number is greater");
//     }
//     else if(guessNo < secretNo ){
//         console.log("number is small");
//     }
//     else {
//         console.log("congratulations");
//         break;
//     }

//     previousNo=guessNo;

// }