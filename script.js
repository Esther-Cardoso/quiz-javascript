const startGameButton = document.querySelector('.start-quiz')
const questionsContainer = document.querySelector('.questions-container')
const answersContainer = document.querySelector('.answers-container')
const questionText = document.querySelector('.question')
const nextQuestionButton = document.querySelector('.next-question')
const img = document.querySelector('.img')

startGameButton.addEventListener('click', startGame)
nextQuestionButton.addEventListener('click', displayNextQuestion)

let currentQuestionIndex = 0 // pergunta atual
let totalCorrect = 0

function startGame() {
  startGameButton.classList.add('hide')
  questionsContainer.classList.remove('hide')
  displayNextQuestion()
}

function displayNextQuestion() {
  resetState()

  if(questions.length === currentQuestionIndex) {
    return finishGame()
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

function resetState() {
  while(answersContainer.firstChild) {
    answersContainer.removeChild(answersContainer.firstChild) // remover os filhos
  }

  document.body.removeAttribute('class') // para voltar a cor normal depois de responder a pergunta
  nextQuestionButton.classList.add('hide') // para sumir com o botão depois de responder uma pergunta e for para a proxima
}

function selectAnswer(event) {
  const answerClicked = event.target

  if(answerClicked.dataset.correct) {
    document.body.classList.add('correct')
    totalCorrect++
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

function finishGame() {
  const totalQuestion = questions.length
  const performance = Math.floor(totalCorrect * 100 / totalQuestion)

  let message = ''

  switch (true) {
    case (performance >= 90):
      message = 'Excelente :)'
      break
    case (performance >= 70):
      message = 'Muito bom :)'
      break
    case (performance >= 50):
      message = 'Bom'
      break
    default:
      message = 'Pode melhorar :('
  }

  questionsContainer.innerHTML =
  `
    <p class="final-message">
    Você acertou ${totalCorrect} de ${totalQuestion} questões!
    <span>Resultado: ${message}</span>
    </p>
    <button onclick=window.location.reload() class="button">
      Refazer teste
    </button>
  `
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
    img: 'https://th.bing.com/th/id/R.528a2c26cbadfd6e7aa2255788a87aba?rik=zLLbNVxPN4CWhA&riu=http%3a%2f%2f4.bp.blogspot.com%2f-Vgawu9u99uU%2fUzjs3twZe8I%2fAAAAAAAAA4Y%2fe2tL_alj0V8%2fs1600%2fgamb%c3%a1_didelphis_quint_csbyo_20100628_0009.jpg&ehk=soLZT63N49gkTMF%2fehFnFKQvE55DQD%2f5a8PIR%2f474QQ%3d&risl=&pid=ImgRaw&r=0',
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