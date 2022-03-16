function CheckAnswers(){

    // Let's store the user name in a new variable
    var Cookie_User_Name = MyQuiz["Name_Quiz"].value;
    // And now, let's create a Cookie that will store the user name (Expire when the browser closes).
    document.cookie ="User_Name =" + Cookie_User_Name;

    // List of correct answers.
    var answers = ["a","a","b","b","a","a","a","a","a","a"];
    var Correct_Answers = 0;

    // The MP3 were downloaded from: https://www.freesoundslibrary.com
    let Booing = new Audio('Booing-A1-www.fesliyanstudios.com.mp3');    
    let Tada = new Audio('Tada-sound.mp3');

    // Checking if the user's name has been filled.
    if(MyQuiz["Name_Quiz"].value ===""){
        alert("Please, write your name!");
        return false;
    }

    // This loops goes through each answer.
    for (let i = 1; i < answers.length+1; i++) {
        // If a question has not been answered we will receive an alert.
        if(MyQuiz["a"+i].value === "") {
                alert(Cookie_User_Name + ", please answer question "+i+".");
                return false;
            }
        // If the question has been answered correctly we will increase 1 the variable "Correct_Answers"
        if(MyQuiz["a"+i].value === answers[i-1]) {
            Correct_Answers++;
        }
    }

    // The below two lines of code allow to display the results 
    var Show_Results = document.getElementById("result");
    Show_Results.style.display = "block";

    var result = document.getElementById("result");

    // The below code allows to show the results and to play a sound depending on the score.    
    // If the final score is higher than 70% we will get a message:
    if (Correct_Answers >= 7){
        result.innerHTML = "<b>Congratulations <u>"+ Cookie_User_Name + "!</u> Your final score is " + 
                            (Correct_Answers/answers.length)*100 +"%.</b>"
        Tada.play();        
    }
    // If the final score is lower than 70% we will get a different message:
    else {
        result.innerHTML = "<b>Do not give up and keep trying it <u>"+ Cookie_User_Name + 
                            "</u>! Your final score is " + (Correct_Answers/answers.length)*100 +"%.</b>"
        Booing.play();
    }
    return false;
}

