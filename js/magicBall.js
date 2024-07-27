const answers = [
  "Without a doubt",
  "It is certain",
  "No doubt about it",
  "Definitely yes",
  "You can count on it",
  "I think so",
  "Most likely",
  "Good prospects",
  "Signs point to yes",
  "Yes",
  "Unclear, try again",
  "Ask later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
  "Don't even think about it",
  "My answer is no",
  "Based on my data, no",
  "Not very good prospects",
  "Very doubtful",
];

const questionWords = [
  "how",
  "why",
  "why",
  "when",
  "where",
  "where to",
  "where from",
  "how much",
  "what",
  "who",
];

document.querySelector("#getAnswer").addEventListener("click", () => {
  const question = document.querySelector("#question").value.toLowerCase();
  let answer = document.querySelector("#answer");
  answer.innerHTML = "";

  if (question === "") {
    answer.innerHTML = "The universe does not hear you...";
    return;
  } else if (questionWords.some((word) => question.includes(word.toLowerCase()))) {
    answer.innerHTML = "The universe cannot answer...";
    return;
  }

  const randomIndex = Math.floor(Math.random() * answers.length);
  const randomAnswer = answers[randomIndex];
  answer.innerHTML = randomAnswer;
});
