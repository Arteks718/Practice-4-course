const buttonEx1 = document.getElementById("exec1");
const buttonEx2 = document.getElementById("exec2");
const buttonEx3 = document.getElementById("exec3");
const buttonEx4 = document.getElementById("exec4");
const buttonEx5 = document.getElementById("exec5");

buttonEx1.addEventListener("click", () => {
  for (let i = 4; i <= 400; i++) console.log(i);
});

buttonEx2.addEventListener("click", () => {
  for (let i = 4; i <= 13; i += 3) console.log(i);
});

buttonEx3.addEventListener("click", () => {
  for (let i = 654; i >= 0; i--) console.log(i);
});

buttonEx4.addEventListener("click", () => {
  for (let i = 1983; i <= 2017; i++) console.log(i);
});

buttonEx5.addEventListener("click", () => {
  for (let i = -4; i <= 100; i+=2) console.log(i);
});