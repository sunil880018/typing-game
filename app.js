window.addEventListener('load',init);
var time = 5;
var score=0;
var showWord = document.getElementById("showWord");
var totalScore = document.getElementById("Score");
var words = ["sunil",
             "ashish",
             "deepanshu",
             "amarjeet",
             "sunny",
             "Arun",
             "Anshu",
             "nikhil",
             "jamshedpur",
             "jharkhand",
             "mca",
             "java",
             "language",
             "technical",
             "sports",
             "hostel",
             "mess",
             "image",
             "database"];

var input = document.getElementById("inputword");
let over = document.getElementById("gameOver");
function init()
{
	let match = wordShow();
	let t = setInterval(function(){
		let showTime = document.getElementById("showTime");
		showTime.innerHTML = time;
		if(time===0)
		{
			over.innerHTML = 'Game Over !';
			input.value = "";
			clearInterval(t);
		}
		else
			time--;
	},1000);

    input.addEventListener("input",function(){
    	if(match===input.value&&time!==0)
    		 {
    		 	over.innerHTML = 'correct!';
    		 	input.value="";
    		 	score++;
    		 	totalScore.innerHTML = score;
    		 	match = wordShow();
    		 	time=5;
    		 }
    });
}
function wordShow()
{
  let randomWord = Math.floor(Math.random() * words.length);
  showWord.innerHTML=words[randomWord];
  return words[randomWord];
}