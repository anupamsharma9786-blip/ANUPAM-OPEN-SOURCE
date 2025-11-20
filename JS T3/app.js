const quotes = [
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "Don’t watch the clock; do what it does. Keep going.",
  "Dream big, work hard, stay focused, and stay humble.",
  "Every moment is a fresh beginning.",
  "Believe you can and you're halfway there.",
  "Do something today that your future self will thank you for.",
  "Great things never come from comfort zones.",
  "Push yourself, because no one else is going to do it for you.",
  "The harder you work for something, the greater you'll feel when you achieve it.",
  "Success doesn’t come from what you do occasionally, but from what you do consistently.",
  "Small steps in the right direction can turn out to be the biggest steps of your life.",
  "Don’t stop when you’re tired. Stop when you’re done.",
  "Focus on the step in front of you, not the whole staircase.",
  "Your only limit is your mind.",
  "Sometimes later becomes never. Do it now.",
  "You don’t have to be great to start, but you have to start to be great.",
  "Work in silence and let your success make the noise.",
  "Stay patient and trust your journey."
];

let main  = document.querySelector('main');
let btn = document.querySelector('button');

btn.addEventListener('click',function(){
    let x = Math.random()*80;
    let y = Math.random()*80;
    let s = Math.random()*3;
    let r = Math.random()*180;

    let h1 = document.createElement('h1');
    let i = Math.floor(Math.random()*quotes.length);
    h1.innerHTML = quotes[i];
    h1.style.left = x+'%';
    h1.style.top = y+'%';
    h1.style.scale = s;
    h1.style.transform = `rotate(${r}deg)`;
    main.appendChild(h1);

})