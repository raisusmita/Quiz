
//Correct questions
var answers = [
    (["female"]),
    (["a", "b"]),
    (["b", "c"]),
    (["c", "d"]),
    ([72.5]),
    (["a", "b"]),
];

var questions = [
	(["I am first question"]),
	(["I am second question"]),
	(["I am third question"]),
	(["I am fourth question"]),
	(["I am fifth question"]),
	(["I am sixth question"])	
]

function showDivs(n) {
	var i;
	var x = document.getElementsByClassName("mySlides");

	if (n > x.length) {slideIndex = 5}
	if (n < 1) {
	  slideIndex = 1;
	} 

	for (i = 0; i < x.length; i++) {
	  x[i].style.display = "none";

	}

	x[slideIndex-1].style.display = "block";

	//Starting the slides index from 0
	var index = parseInt(slideIndex)-1

	//Applicable only for questions slides excluding score page
	if(index < index){
		document.getElementById('tag'+index).innerHTML = questions[index];  
	}
}

function plusDivs(n, id) {
	showDivs(slideIndex += n);
    // Selected answer
    var checkboxes = document.getElementsByName('question' + id);
    var num = document.getElementById('question4');
    var selected = [];
    // Collecting the answer gussed by users
    for (i=0; i<checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            selected.push(checkboxes[i].value);
        }
    }
    
	// console.log("Id from next"+id)
    // Checking Answer
    if (JSON.stringify(selected) === JSON.stringify(answers[id]) || (num.value == answers[id]))
    {
    	scores[id]=1
        // console.log( "Scores is: "+scores)
    }
    else
    {
    	scores[id]=0
        // console.log( "Scores is: "+scores)
    }
}

function subDivs(n, id) {
	showDivs(slideIndex += n);

	//Getting id of prev questions
	var prevId = parseInt(id) - 1
	//Updating the score of prev question to 0
	scores[prevId] = 0
	// console.log( "Scores" + scores)
	// console.log("Id from prev"+prevId)
}


function showResult(id){
	//Getting total number of questions
	var x = parseInt(id) + 1
	//Adding all the scores value from an array
	finalScores =scores.reduce((a,b)=>a+b,0)
		
	document.getElementById("score").innerHTML ="Your Score is : " + finalScores
	+ " out of " + x ;
}


