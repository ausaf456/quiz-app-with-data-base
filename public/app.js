 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
 import {
    getDatabase,
    ref,
    set,
   onValue,remove,update
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyBqhyI1mhqgS5dnMKGk5laZ2CAHx8p9qxM",
   authDomain: "quiz-app-4604d.firebaseapp.com",
   databaseURL: "https://quiz-app-4604d-default-rtdb.firebaseio.com",
   projectId: "quiz-app-4604d",
   storageBucket: "quiz-app-4604d.appspot.com",
   messagingSenderId: "652696569492",
   appId: "1:652696569492:web:b36f51569454eb998a5681",
   measurementId: "G-TQFTZVTH4N"
 };

 // Initialize Firebase

 const app = initializeApp(firebaseConfig);
 const db = getDatabase()
 
 
var myarray =[]



 window.gettingQuestions = function () {
    console.log("calll hogaya");
    onValue(ref(db,"quiz"),function(data){
        //    allquestions.innerHTML=''
          
           console.log("dataaaaaaaaaaaaaaa",data.val());
           data.forEach(function(AllData){
             myarray.push({
             questionn :AllData.val().question,

             options:[
              AllData.val().opt1,
                AllData.val().opt2,
               AllData.val().opt3,
             AllData.val().opt4,
             ],
             
          
             correctoption :AllData.val().correctopt,
             quizid:AllData.val().id
             })
               var questionn =AllData.val().question
               var firstoption =AllData.val().opt1
               var secondoption =AllData.val().opt2
               var thirdoption =AllData.val().opt3
               var fourthoption =AllData.val().opt4
               var correctoption =AllData.val().correctopt
               var quizid=AllData.val().id
             
        //        if(allquestions){
        //            allquestions.innerHTML+=`
        //           <div class="mt-5">
        //            <p class="bg-secondary rounded p-3"><span>Question: </span><span>${questionn}</span></p>
        //        </div>
        //        <div class="d-flex justify-content-around">
        //            <p class="bg-secondary rounded p-3">${firstoption}</p>
        //            <p class="bg-secondary rounded p-3">${secondoption}</p>
        //        </div>
        //        <div class="d-flex justify-content-around">
        //            <p class="bg-secondary rounded p-3">${thirdoption}</p>
        //            <p class="bg-secondary rounded p-3">${fourthoption}</p>
        //        </div>
        //        <div class="mb-5 " style="border-bottom:1px solid gray">
                 
        //            <p class="bg-secondary rounded p-3"><span>Correct Option: </span><span>${correctoption}</span></p>
        //           <div class="d-flex justify-content-around">
        //           <button class="btn btn-outline-primary w-50  buton"onclick="editquestion(${questionn,firstoption,secondoption,thirdoption,fourthoption,correctopt})"  ><i class="fa-solid fa-pen-to-square"></i> Edit</button>
        //           <button class="btn btn-outline-danger w-50   buton" onclick="Deletequestion(${quizid})" ><i class="fa-solid fa-trash"></i>Delete</button>
        //           </div>
                   
        //            </div>
             
        //           `
   
   
        //     }
        //   else{
        //        allquestions.innerHTML='No Questions are available.'
        //  }
           });
       
       })
  
    }




   gettingQuestions();



var quizapp = [
    {
        Question: "Q1: What does HTML stand for?",
        a: "hyper text markup language",
        b: "home tool markup language",
        c: "hypertext and link markup language",
        d: "hello tool makeup language",
        ans: "ans1"

    },
    {
        Question: "Q2: Who is making the Web standards?",
        a: "Google",
        b: "Mozilla",
        c: "Microsoft",
        d: "world wide web consortium",
        ans: "ans1"
    },
    {
        Question: "Q3: Choose the correct HTML element for the largest heading",
        a: "<head>",
        b: "<h6>",
        c: "<heading>",
        d: "<h1>",
        ans: "ans4"
    },
    {
        Question: "Q4: What is the correct HTML element for inserting a line break?",
        a: "<br>",
        b: "<break>",
        c: "<ib>",
        d: "<brk>",
        ans: "ans1"
    },
    {
        Question: "Q5: What is the correct HTML for adding a background color?",
        a: "<bg>",
        b: "<body bg = yellow>",
        c: "<body style = background-color: yellow;>",
        d: "<backgorund> yellow </background>",
        ans: "ans2"
    },
    {
        Question: "Q6: Choose the correct HTML element to define important text?",
        a: "<b>",
        b: "<i>",
        c: "<strong>",
        d: "<bold>",
        ans: "ans1"
    },
    {
        Question: "Q7: Choose the correct HTML element to define emphasized text",
        a: "<em>",
        b: "<i>",
        c: "<italic>",
        d: "<e>",
        ans: "ans1"

    },
    {
        Question: "Q8: Which character is used to indicate an end tag?",
        a: "/",
        b: "<",
        c: "*",
        d: "^",
        ans: "ans1"

    },
    {
        Question: "Q8: Which of these elements are all <table> elements?",
        a: "<thead<tbody><tr>",
        b: "<table><tr><tt>",
        c: "<table><tr><td>",
        d: "<table><thead><tfoot>",
        ans: "ans1"
    },
    {
        Question: "Q9: Inline elements are normally displayed without starting a new line",
        a: "False",
        b: "True",
        c: "None",
        d: "Both",
        ans: "ans2"
    },
    {
        Question: "Q9: How can you make a numbered list?",
        a: "<dl>",
        b: "<li>",
        c: "<ol>",
        d: "<ul>",
        ans: "ans3"
    },
];
var quiz = document.getElementById("main")
var answer = document.querySelectorAll("answer")
// var questionel = document.getElementById("question")
// var atext = document.getElementById("option1")
// var btext = document.getElementById("option2")
// var ctext = document.getElementById("option3")
// var dtext = document.getElementById("option4")
// var ans1 = document.getElementById("ans1")
// var ans2 = document.getElementById("ans2")
// var ans3 = document.getElementById("ans3")
// var ans4 = document.getElementById("ans4")
var submitbtn = document.getElementById("butons")
var answers = document.querySelectorAll("answer")
var allquestions = document.getElementById("maindiv")
var currentquiz = 0
var score = 0


 var selectedOpt=0;
// console.log("first",myarray);
// console.log("second",quizapp);
setTimeout(() => {
    

var questionel = myarray[0].questionn;
var  correctopt = myarray.correctoption;
var atext = myarray[0].options[0];
var btext = myarray[0].options[1];
var ctext = myarray[0].options[2];
var dtext = myarray[0].options[3];


allquestions.innerHTML=`
<div class="inner ">
<h2 id="question"> <b>${questionel} </b></h2>
<ul>
    <li>
        <input type="radio" name="option" id="ans1"   class="answer" onclick="answerFunc(0)">
        <label for="ans1" id="option1">${atext}</label>
    </li>
    <li>
        <input type="radio" name="option" id="ans2" class="answer" onclick="answerFunc(1)">
        <label for="ans2" id="option2">${btext}</label>
    </li>
    <li>
        <input type="radio" name="option" id="ans3" class="answer" onclick="answerFunc(2)">
        <label for="ans3" id="option3">${ctext}</label>
    </li>
    <li>
        <input type="radio" name="option" id="ans4" class="answer" onclick="answerFunc(3)">
        <label for="ans4" id="option4">${dtext}</label>
    </li>
</ul>
<button id="buton" onclick="nextQues()">Next</button>

</div>
`
// if(myarray[0].options[selectedOpt]===correctopt){
//     score++;
    
// }
}, 5000);
window.nextQues =function () {
    if(  myarray.length===currentquiz){
        alert("Quiz Is Completed")
    }else{

   
    // deselectanswer()
  
    var currentquizdata
      
  if(currentquiz===0){
    currentquizdata=myarray[0]
  }
  else{
   currentquizdata =myarray[currentquiz]
  }

    console.log(currentquizdata);
  var  questionel = currentquizdata.questionn;
  var  correctopt = currentquizdata.correctoption;
  var  atext = currentquizdata.options[0];
  var  btext = currentquizdata.options[1];
  var  ctext = currentquizdata.options[2];
  var  dtext = currentquizdata.options[3];


    allquestions.innerHTML=`
    <div class="inner ">
    <h2 id="question"> <b>${questionel} </b></h2>
    <ul>
        <li>
            <input type="radio" name="option" id="ans1"   class="answer" onclick="answerFunc(0)">
            <label for="ans1" id="option1" >${atext}</label>
        </li>
        <li>
            <input type="radio" name="option" id="ans2" class="answer" onclick="answerFunc(1)">
            <label for="ans2" id="option2">${btext}</label>
        </li>
        <li>
            <input type="radio" name="option" id="ans3" class="answer" onclick="answerFunc(2)">
            <label for="ans3" id="option3">${ctext}</label>
        </li>
        <li>
            <input type="radio" name="option" id="ans4" class="answer" onclick="answerFunc(3)">
            <label for="ans4" id="option4">${dtext}</label>
        </li>
    </ul>
    <button id="buton" onclick="nextQues()">Next</button>
</div>
    `
    // if(currentquizdata.options[selectedOpt]===correctopt){
    //     score++
    //     console.log("correct")
    // }
    currentquiz++

}
// correctoption
}
// nextQues();

// function getcheckedanswer(){
//     var answers;
//     answer.forEach((currentelement){

    
//         if (currentelement.checked){
//             answers == currentelement.Value;
//         }
//     })
//     return answers;
// }
// function getcheckedanswer() {
//     var answers;
//     answers.forEach((currentelement){
//         if (currentelement.checked) {
//             answers = currentelement.id;
//         }
//     })
//     return answer;
// };

// submitbtn.addEventListener("click", ()  {
//     var xyzanswer = getcheckedanswer();
//     console.log(getcheckedanswer);

// });

window.answerFunc=function(a){
    selectedOpt=a
}