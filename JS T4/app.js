let btn = document.querySelector('button');

let load = document.querySelector('.inner');

let ptg = document.querySelector('h1');

let para = document.querySelector('p')

btn.addEventListener('click',function(){
  let count = 0;

  btn.style.pointerEvents ='none';

  let n = 50 + Math.floor(Math.random()*50);
  
  let loady = setInterval(function(){
        count++;
        load.style.width = count +'%';
        ptg.innerHTML = count + '%';
          

      },n)

      setTimeout(function(){
        clearInterval(loady);
        btn.innerHTML='Downloaded'
        btn.style.opacity=0.6;
        para.innerHTML = 'Your File has been downloaded successfully'

      },n*100)
  
})