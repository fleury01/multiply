 let text1 = document.getElementById("text1");
 let text2 = document.getElementById("text2");
 let text3 = document.getElementById("text3");
let butt = document.getElementById("butt");
let num1 = Math.round( Math.random()*12);
let num2 = Math.round( Math.random()*12);
let input = document.getElementById("number");

//the function 

var solution = (a,b) => a * b ;

let result = solution(num1,num2);




butt.addEventListener("click", function(){
    let Input = input.value;
    //change the text input to a number 
    let integer = Number(Input);
  if(result == integer){
    text3.innerText = "you are right";
} else {
    text3.innerText = "you are wrong";
}  

// Refresh the page after 2000 milliseconds (2 seconds)
setTimeout(function() {
    location.reload();
}, 2000);

})

text1.innerText = num1;
text2.innerText = num2;
