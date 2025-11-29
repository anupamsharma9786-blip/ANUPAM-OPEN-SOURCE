let p = document.querySelector('p');

let text = p.innerText;

const characters ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";


p.addEventListener('mouseenter',()=>{
  p.style.pointerEvents = 'none';
  let iteration = 0;
  setInterval(()=>{

  let display = text.split('').map((char,idx)=>{

    if(idx<iteration){
      return char;
    }

    return characters[Math.floor(Math.random()*52)];

  }).join('');

  iteration+=0.2;

  p.innerText = display;

},50)

  setTimeout(()=>{
    p.style.pointerEvents = 'auto';
  },5000)

})


