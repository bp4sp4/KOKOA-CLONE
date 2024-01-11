const time = document.getElementById("current-time");

setInterval(() => {
  const date = new Date();
  time.innerHTML = date.toLocaleTimeString();
}, 1000);
