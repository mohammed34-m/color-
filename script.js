// Save this as script.js
document.getElementById("changeColorButton").addEventListener("click", function() {
  const colors = ["#FF5733", "#33FF57", "#5733FF", "#F5FF33", "#FF33F5"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
});
