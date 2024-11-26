// script.js

// ISRO Quiz Questions
const questions = [
  {
      question: "Who is the current chairman of ISRO?",
      options: ["K Sivan", "S Radhakrishnan", "Vikram Sarabhai", "Ramanath Rao"],
      answer: "K Sivan"
  },
  {
      question: "When was ISRO founded?",
      options: ["1969", "1965", "1972", "1980"],
      answer: "1969"
  },
  {
      question: "Where is the ISRO headquarters located?",
      options: ["Mumbai", "Chennai", "Bangalore", "Hyderabad"],
      answer: "Bangalore"
  }
];

// Display Questions
const questionContainer = document.getElementById('question-container');
questions.forEach((q, index) => {
  const questionElement = document.createElement('div');
  questionElement.classList.add('question');
  questionElement.innerHTML = `
      <p>${q.question}</p>
      ${q.options.map(option => `
          <label>
              <input type="radio" name="question${index}" value="${option}">
              ${option}
          </label>
      `).join('')}
  `;
  questionContainer.appendChild(questionElement);
});

// Quiz Submission and Result
document.getElementById('submit-quiz').addEventListener('click', () => {
  let score = 0;
  questions.forEach((q, index) => {
      const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
      if (selectedOption && selectedOption.value === q.answer) {
          score++;
      }
  });

  const resultMessage = `You scored ${score} out of ${questions.length}!`;
  document.getElementById('quiz-result').innerText = resultMessage;
});

// Image Carousel Functionality
let currentIndex = 0;

function showImage(index) {
  const images = document.querySelectorAll('.carousel-images img');
  images.forEach(img => img.classList.remove('active'));
  images[index].classList.add('active');
}

document.getElementById('prev').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + 3) % 3;
  showImage(currentIndex);
});

document.getElementById('next').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % 3;
  showImage(currentIndex);
});

showImage(currentIndex);

// Fetch Joke API (Example)
async function fetchJoke() {
  const response = await fetch('https://api.jokes.one/jod?category=animal');
  const data = await response.json();
  const joke = data.contents.jokes[0].joke.text;
  document.getElementById('joke-container').innerText = joke;
}

fetchJoke();
// script.js

// Array of jokes
const jokes = [
  "Why don't skeletons fight each other? They don't have the guts.",
  "I told my wife she was drawing her eyebrows too high. She looked surprised.",
  "Why did the scarecrow win an award? Because he was outstanding in his field!",
  "I used to play piano by ear, but now I use my hands.",
  "What do you call fake spaghetti? An impasta!"
];

// Function to display a random joke
function displayJoke() {
  const randomIndex = Math.floor(Math.random() * jokes.length); // Generate random index
  const jokeText = jokes[randomIndex]; // Get the joke based on the random index
  document.getElementById("jokeText").innerText = jokeText; // Display the joke
}

// Attach the displayJoke function to the button click event
document.getElementById("jokeButton").addEventListener("click", displayJoke);

