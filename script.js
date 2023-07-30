const startGameButton = document.querySelector('.start-quiz')
const questionsContainer = document.querySelector('.questions-container')
const answersContainer = document.querySelector('.answers-container')
const questionText = document.querySelector('.question')
const nextQuestionButton = document.querySelector('.next-question')
const img = document.querySelector('.img')

startGameButton.addEventListener('click', startGame)

let currentQuestionIndex = 0 // pergunta atual

function startGame() {
  startGameButton.classList.add('hide')
  questionsContainer.classList.remove('hide')
  displayNextQuestion()
}

function displayNextQuestion() {
  while(answersContainer.firstChild) {
    answersContainer.removeChild(answersContainer.firstChild) // remover os filhos
  }

  // colocando a pergunta do banco de perguntas no elemento span
  questionText.textContent = questions[currentQuestionIndex].question

  // foi aqui que eu alterei
  img.src = questions[currentQuestionIndex].img

  questions[currentQuestionIndex].answers.forEach(answer => {
    const newAnswer = document.createElement('button')
    newAnswer.classList.add('button', 'answer')
    newAnswer.textContent = answer.text
    if(answer.correct) {
      newAnswer.dataset.correct = answer.correct
    }
    answersContainer.appendChild(newAnswer)

    newAnswer.addEventListener('click', selectAnswer)
  })
}


function selectAnswer(event) {
  const answerClicked = event.target

  if(answerClicked.dataset.correct) {
    document.body.classList.add('correct')
  } else {
    document.body.classList.add('incorrect')
  }

  document.querySelectorAll('.answer').forEach(button => {
    if(button.dataset.correct) {
      button.classList.add('correct')
    } else {
      button.classList.add('incorrect')
    }

    button.disabled = true
  })

  nextQuestionButton.classList.remove('hide')
  currentQuestionIndex++
}





// banco de perguntas
const questions = [
  {
    question: 'Quantos meses até que uma baleia grávida dê à luz?',
    img: 'https://th.bing.com/th/id/OIP.G3YCd40U9Qm8g8PvIp01WgHaEa?pid=ImgDet&rs=1',
    answers: [
      { text: "9 meses", correct: false },
      { text: "12 meses", correct: false },
      { text: "16 meses", correct: true },
      { text: "32 meses", correct: false },
    ]
  },
  {
    question: 'Qual é o maior animal do mundo?',
    img: 'https://th.bing.com/th/id/R.5f0635e1c7c43ed999430f94072bb0a5?rik=sV3jVTLWOMgcGg&pid=ImgRaw&r=0',
    answers: [
      { text: "Girafa", correct: false },
      { text: "Lula colossal", correct: false },
      { text: "Baleia azul antártica", correct: true },
      { text: "Elefante africano", correct: false },
    ]
  },
  {
    question: 'Qual direção as aves do norte voam durante o inverno?',
    img: 'https://th.bing.com/th/id/OIP.ygkmb-i5Gwpmvnd8CA8ccgHaE8?pid=ImgDet&rs=1',
    answers: [
      { text: "Sul", correct: true },
      { text: "Norte", correct: false },
      { text: "Leste", correct: false },
      { text: "Oeste", correct: false },
    ]
  },
  {
    question: 'Qual é o tempo médio de vida de um cão?',
    img: 'https://i.pinimg.com/736x/f1/86/c8/f186c85c151e519c6b1fe23b3864a902--bibi-photographs.jpg',
    answers: [
      { text: "3-5 anos", correct: false },
      { text: "10-13 anos", correct: true },
      { text: "14-20 anos", correct: false },
      { text: "20-25 anos", correct: false },
    ]
  },
  {
    question: 'Qual raça de cão é a maior em tamanho?',
    img: 'https://s3.observador.pt/wp-content/uploads/2016/12/21114822/10517566_680566842018463_3455051223837443591_n.jpg',
    answers: [
      { text: "Golden Retriever", correct: false },
      { text: "Mastim Inglês", correct: true },
      { text: "Teacup Chihuahua", correct: false },
      { text: "Pastor Alemão", correct: false },
    ]
  },
  {
    question: 'Qual é o mecanismo de defesa de um gambá?',
    img: 'https://segredosdomundo.r7.com/wp-content/uploads/2020/04/gamba-o-famoso-animal-que-e-conhecido-por-ser-fedido-1-1024x683.jpg',
    answers: [
      { text: "Garras afiadas", correct: false },
      { text: "Saliva venenosa", correct: false },
      { text: "Mordidas fatais", correct: false },
      { text: "Peidos com cheiro fétido", correct: true },
    ]
  },
  {
    question: 'Onde vivem normalmente os leões?',
    img: 'https://th.bing.com/th/id/OIP.Xj_XB9KGp8Oon6kxGo69OgHaE-?pid=ImgDet&rs=1',
    answers: [
      { text: "Irã", correct: false },
      { text: "Filipinas", correct: false },
      { text: "África", correct: true },
      { text: "Grã-Bretanha", correct: false },
    ]
  },
]