let current = Date.now();
function sleep(time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}

sleep(200).then(() => {
  console.log(Date.now() - current);
});
