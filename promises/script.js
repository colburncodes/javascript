function wait(ms) {
  // Write your code here
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

wait(2000).then(() => console.log("2000ms has passed"));
