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
 
 






var question =document.getElementById("question")
var opt1 =document.getElementById("opt1")
var opt2 =document.getElementById("opt2")
var opt3 =document.getElementById("opt3")
var opt4 =document.getElementById("opt4")
var correctopt =document.getElementById("correctopt")
var allquestions =document.getElementById("allquestions")

window.gettingQuestions = function () {
 console.log("calll hogaya");
 onValue(ref(db,"quiz"),function(data){
        allquestions.innerHTML=''
       
        console.log("dataaaaaaaaaaaaaaa",data);
        data.forEach(function(AllData){
          
            var questionn =AllData.val().question
            var firstoption =AllData.val().opt1
            var secondoption =AllData.val().opt2
            var thirdoption =AllData.val().opt3
            var fourthoption =AllData.val().opt4
            var correctoption =AllData.val().correctopt
            var quizid=AllData.val().id
          
            if(allquestions){
                allquestions.innerHTML+=`
               <div class="mt-5">
                <p class="bg-secondary rounded p-3"><span>Question: </span><span>${questionn}</span></p>
            </div>
            <div class="d-flex justify-content-around">
                <p class="bg-secondary rounded p-3">${firstoption}</p>
                <p class="bg-secondary rounded p-3">${secondoption}</p>
            </div>
            <div class="d-flex justify-content-around">
                <p class="bg-secondary rounded p-3">${thirdoption}</p>
                <p class="bg-secondary rounded p-3">${fourthoption}</p>
            </div>
            <div class="mb-5 " style="border-bottom:1px solid gray">
              
                <p class="bg-secondary rounded p-3"><span>Correct Option: </span><span>${correctoption}</span></p>
               <div class="d-flex justify-content-around">
               <button class="btn btn-outline-primary w-50  buton"onclick="editquestion(${questionn,firstoption,secondoption,thirdoption,fourthoption,correctopt})"  ><i class="fa-solid fa-pen-to-square"></i> Edit</button>
               <button class="btn btn-outline-danger w-50   buton" onclick="Deletequestion(${quizid})" ><i class="fa-solid fa-trash"></i>Delete</button>
               </div>
                
                </div>
          
               `


            }
        else{
            allquestions.innerHTML='No Questions are available.'
        }
        });
    
    })
}


gettingQuestions();



window.submitt=function(){
    var obj = {

        question: question.value,
        opt1: opt1.value,
        opt2: opt2.value,
        opt3: opt3.value,
        opt4: opt4.value,
        correctopt: correctopt.value,

    };
    obj.id = Math.random().toString().slice(2);
   
    let reference = ref(db, `quiz/${obj.id}/`)
    set(reference, obj);
    gettingQuestions();
}


window.Deletequestion=function(id){
    remove(ref(db,`quiz/${id}`))
}
// window.deleteallquestions=function(){
//     remove(ref(db,`quiz`))
// }

window.editquestion = function(ques,op1,op2,op3,op4,correctop){
    console.log("sduykuzjlkx euwsjhzkj");
    var newquestion = prompt(`EDIT Question`,ques);
    var newopt1 = prompt(`EDIT newopt1`,op1);
    var newopt2 = prompt(`EDIT newopt12`,op2);
    var newopt3 = prompt(`EDIT newopt3`,op3);
    var newopt4 = prompt(`EDIT newopt4`,op4);
    var newcorrectoption = prompt(`EDIT Correct Option`,correctop);
   
    update(ref(db,`quiz/${AllData.val().id}`),{
        question:newquestion ,
        opt1: newopt1,
        opt2: newopt2,
        opt3: newopt3,
        opt4: newopt4,
        correctopt: newcorrectoption,
    })

}