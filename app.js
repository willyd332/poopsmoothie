const array = [
"test1",
"test2",
"tes3"
]

const btn = document.getElementById("mainBtn")

btn.addEventListener("click", () => {
  const num = Math.floor(Math.random() * array.length)
  document.getElementById("word").innerText = array[num]
  array.splice(num,1);
})