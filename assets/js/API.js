async function query(data) {
  const response = await fetch(
    "https://api-inference.huggingface.co/models/Hello-SimpleAI/chatgpt-detector-roberta",
    {
      headers: {
        Authorization: "Bearer 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",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(data),
    }
  );
  const result = await response.json();
  return result;
}

function getOutput() {
  const inputText = document.getElementById("my-textarea").value;
  query({ inputs: inputText })
    .then((response) => {
      const outputElement = document.getElementById("output");
      const humanProgressBar = document.getElementById("human-progress-bar");
      const humanProgressLabel = document.getElementById(
        "human-progress-label"
      );
      const aiProgressBar = document.getElementById("ai-progress-bar");
      const aiProgressLabel = document.getElementById("ai-progress-label");

      const humanScore = response[0][0].score;
      const aiScore = response[0][1].score;
      const humanPercentage = Math.round(humanScore * 100);
      const aiPercentage = Math.round(aiScore * 100);

      outputElement.innerText = `Human: ${humanPercentage}%, AI: ${aiPercentage}%`;
      humanProgressLabel.innerText = `Human: ${humanPercentage}%`;
      humanProgressBar.value = humanPercentage;
      aiProgressLabel.innerText = `AI: ${aiPercentage}%`;
      aiProgressBar.value = aiPercentage;
    })
    .catch((error) => console.error(error));
}
