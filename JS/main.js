const progressBars = document.querySelectorAll(".bar");

progressBars.forEach((bar) => {
  console.log(bar);
  const value = bar.dataset.progress;
  bar.style.background = `linear-gradient(to right, #2196f3 ${value}, #ececec ${value})`;
});
