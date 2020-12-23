const array = [
"Bra",
"Whitey Tighties",
"Peanut",
"George Washington",
"Watermelon",
"Willy Wonka",
"Tadpole",
"Emoji",
"Porous",
"Sentimental",
"Dream",
"Kite",
"Artfull",
"Geico",
"Spam",
"Chamomile",
"Derelict",
"Need",
"Photo Credit",
"Mucus",
"Napalm"
]

const btn = document.getElementById("mainBtn")

btn.addEventListener("click", () => {
  const num = Math.floor(Math.random() * array.length)
  document.getElementById("word").innerText = array[num]
  array.splice(num,1);
})