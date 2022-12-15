function consoleDate() {
  const date = new Date();
  console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
}

// The setInterval() method sets a repeating timer,
// which allows you to run a callback function multiple times
// at a specified time interval
setInterval(consoleDate, 1000);
