function setPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("success");
    }, 4000);
  });
}

setPromise().then((res) => console.log(res));
