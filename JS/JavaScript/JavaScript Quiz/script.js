const quizDB = [
	{
		question: "Q1: This is question 1",
		a: "Choose Option 1",
		b: "Choose Option 2",
		c: "Choose Option 3",
		d: "Choose Option 4",
		ans: "ans1"
	},
	{
		question: "Q2: This is question 1",
		a: "Choose Option 1",
		b: "Choose Option 2",
		c: "Choose Option 3",
		d: "Choose Option 4",
		ans: "ans2"
	},
	{
		question: "Q3: This is question 1",
		a: "Choose Option 1",
		b: "Choose Option 2",
		c: "Choose Option 3",
		d: "Choose Option 4",
		ans: "ans3"
	},
	{
		question: "Q4: This is question 1",
		a: "Choose Option 1",
		b: "Choose Option 2",
		c: "Choose Option 3",
		d: "Choose Option 4",
		ans: "ans4"
	}

];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');
const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score = 0;
const loadQuestion = () =>{
		const questionList = quizDB[questionCount];
		question.innerText = questionList.question;
		option1.innerText = questionList.a;
		option2.innerText = questionList.b;
		option3.innerText = questionList.c;
		option4.innerText = questionList.d;
}
loadQuestion();

const getCheckAnswer = () =>{
		let answer;
		answers.forEach((curAnsElem) => {
			if (curAnsElem.checked) {
				answer = curAnsElem.id;
			}
		});
		return answer;
};
const deselect = () =>{
	answers.forEach((curAnsElem) => curAnsElem.checked = false);
}

submit.addEventListener('click', () => {
		const checkedAnswer = getCheckAnswer();
		console.log(checkedAnswer);

		if (checkedAnswer === quizDB[questionCount].ans){
			score++;
		};
		questionCount++;
		deselect();
		if (questionCount < quizDB.length){
			loadQuestion();
		}
		else{
			showScore.innerHTML = `
				<h3>You have Scored ${score}/${quizDB.length}...&#9996;</h3>
				<button class="btn" onclick="location.reload()">Play Again</button>
			`;
			showScore.classList.remove('scoreArea');
		}
});