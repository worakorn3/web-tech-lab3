let quizCount = Infinity;
let quizMaxPoint = 0;
let quizScore = 0;
let quizJSON = [{
    "questions": 
    [
        {
            "question": "What is the scientific name of a butterfly?",
            "answers": [
                "Apis",
                "Coleoptera",
                "Formicidae",
                "Rhopalocera"
            ],
            "correctIndex": 3
        },
        {
            "question": "How hot is the surface of the sun?",
            "answers": [
                "1,233 K",
                "5,778 K",
                "12,130 K",
                "101,300 K"
        ],
            "correctIndex": 1
        },
        {
            "question": "Who are the actors in The Internship?",
            "answers": [
                "Ben Stiller, Jonah Hill",
                "Courteney Cox, Matt LeBlanc",
                "Kaley Cuoco, Jim Parsons",
                "Vince Vaughn, Owen Wilson"
            ],
            "correctIndex": 3
        },
        {
            "question": "What is the capital of Spain?",
            "answers": [
                "Berlin",
                "Buenos Aires",
                "Madrid",
                "San Juan"
            ],
            "correctIndex": 2
        },
        {
            "question": "What are the school colors of the University of Texas at Austin?",
            "answers": [
                "Black, Red",
                "Blue, Orange",
                "White, Burnt Orange",
                "White, Old gold, Gold"
            ],
            "correctIndex": 2
        },
        {
            "question": "What is 70 degrees Fahrenheit in Celsius?",
            "answers": [
                "18.8889",
                "20",
                "21.1111",
                "158"
            ],
            "correctIndex": 2
        },
        {
            "question": "When was Mahatma Gandhi born?",
            "answers": [
                "October 2, 1869",
                "December 15, 1872",
                "July 18, 1918",
                "January 15, 1929"
            ],
            "correctIndex": 0
        },
        {
            "question": "How far is the moon from Earth?",
            "answers": [
                "7,918 miles (12,742 km)",
                "86,881 miles (139,822 km)",
                "238,400 miles (384,400 km)",
                "35,980,000 miles (57,910,000 km)"
            ],
            "correctIndex": 2
        },
        {
            "question": "What is 65 times 52?",
            "answers": [
                "117",
                "3120",
                "3380",
                "3520"
            ],
            "correctIndex": 2
        },
        {
            "question": "How tall is Mount Everest?",
            "answers": [
                "6,683 ft (2,037 m)",
                "7,918 ft (2,413 m)",
                "19,341 ft (5,895 m)",
                "29,029 ft (8,847 m)"
            ],
            "correctIndex": 3
        },
        {
            "question": "When did The Avengers come out?",
            "answers": [
                "May 2, 2008",
                "May 4, 2012",
                "May 3, 2013",
                "April 4, 2014"
            ],
            "correctIndex": 1
        },
        {
            "question": "What is 48,879 in hexidecimal?",
            "answers": [
                "0x18C1",
                "0xBEEF",
                "0xDEAD",
                "0x12D591"
            ],
            "correctIndex": 1
        },{
            "question": "What is what?",
            "answers": [
                "Question",
                "Sarcasm",
                "Answer",
                "..."
            ],
            "correctIndex": 0
        },{
            "question": "How do you pronounce 'What'?",
            "answers": [
                "What",
                "Wad",
                "Wot",
                "Wat"
            ],
            "correctIndex": 0
        },{
            "question": "Question is...",
            "answers": [
                "No!!",
                "No!!!",
                "No!!!!",
                "No!!!!!"
            ],
            "correctIndex": 0
        },{
            "question": "No!!!!!!",
            "answers": [
                "Wut?",
                "What?",
                "Wad?",
                "Wat?"
            ],
            "correctIndex": 1
        },{
            "question": "Yay!!",
            "answers": [
                "Congrat!",
                "HNY!",
                "HBD!",
                "YAY!"
            ],
            "correctIndex": 0
        },{
            "question": "Who is the latest hero of marvel's universe?",
            "answers": [
                "Red Panther",
                "Blue Panther",
                "White Panther",
                "Black Panther"
            ],
            "correctIndex": 3
        },{
            "question": "What is the last?",
            "answers": [
                "The last",
                "The lastest",
                "The latest",
                "The least"
            ],
            "correctIndex": 0
        },{
            "question": "What is the first?",
            "answers": [
                "4",
                "3",
                "2",
                "1"
            ],
            "correctIndex": 3
        }
    ]
}]
let quizAsked = new Array();
let quizObject;

// Utility function for ceiling questions
function quiz10(){
    let quizNumRand = random();
    quizCount = 10;
    quizMaxPoint = 10;
    quizObject = quizJSON[0].questions[quizNumRand];
    // console.log(quizJSON[0].questions[quizNumRand]);
    // document.getElementById("").innerHTML = quizObject.question;
    document.getElementById("quiz-remain-integer").innerHTML = quizCount;
    generateQuiz(quizObject.question, quizObject.answers, quizNumRand);
}

function quiz20(){
    let quizNumRand = random();
    quizCount = 20;
    quizMaxPoint = 20;
    quizObject = quizJSON[0].questions[quizNumRand];
    document.getElementById("quiz-remain-integer").innerHTML = quizCount;
    generateQuiz(quizObject.question, quizObject.answers, quizNumRand);
}

function generateQuiz(question, answers, quizNumRand){
    document.getElementById("quiz-question").innerHTML = "<h4>"+question;+"</h4>"
    document.getElementById("first-btn").innerHTML = "<h5>"+answers[0]+"</h5>";
    document.getElementById("second-btn").innerHTML = "<h5>"+answers[1]+"</h5>";
    document.getElementById("third-btn").innerHTML = "<h5>"+answers[2]+"</h5>";
    document.getElementById("fourth-btn").innerHTML = "<h5>"+answers[3]+"</h5>";
}

document.getElementById("first-btn").addEventListener("click",checkAns(document.getElementById("first-btn").innerHTML), false);

function checkAns(answer) {
    console.log(answer);
    document.getElementById("quiz-remain-integer").innerHTML = quizCount;
    if(quizCount < 1){
        alert("Your score: "+quizScore+"/"+quizMaxPoint+" points\n+to play again please choose numbers of quiz again")
    }else{
        /*image change: 
        default and wrong answer
            https://media.giphy.com/media/xTiTnkFneD1je4rPOM/giphy.gif
        correct answer
            https://media.giphy.com/media/26ufdipQqU2lhNA4g/giphy.gif
        
        */
        let b = document.getElementById("imgg")
        if(correct){
            quizScore++;
            
        } else {
            
        }
    }
    quizCount--;
}

function random() {
    let quizNumRand = Math.floor(Math.random()*100%20);
    return quizNumRand;
}