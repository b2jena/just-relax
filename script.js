const container = document.getElementById("container");
const text = document.getElementById("text");

const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2; // 3 seconds of "Breathe In!" and 3 seconds of "Breathe Out!"
const holdTime = totalTime / 5; // 1.5 seconds of hold

breathAnimation();

// the main logic of this application lies here
function breathAnimation() {
  text.innerText = "Breathe In!";
  container.className = "container grow";

  // The setTimeout() method calls a function after a number of milliseconds.
  // setTimeout() is an asynchronous function, meaning that the timer function will not pause execution of other functions in the functions stack. In other words, you cannot use setTimeout() to create a "pause" before the next function in the function stack fires.
  setTimeout(() => {
    text.innerText = "Hold";
    setTimeout(() => {
      text.innerText = "Breathe Out!";
      container.className = "container shrink";
    }, holdTime);
  }, breatheTime);
}

setInterval(breathAnimation, totalTime);
