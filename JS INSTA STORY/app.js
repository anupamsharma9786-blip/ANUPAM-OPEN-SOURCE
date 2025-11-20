let arr = [
    {
        dp:"https://images.unsplash.com/photo-1762509347740-0586629cdfba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D",
        story:"https://media.istockphoto.com/id/1540196997/photo/woman-tourist-in-casual-clothes-with-a-large-travel-suitcase-for-travel.jpg?s=2048x2048&w=is&k=20&c=tq7i23KKKJcqe7Sl3e-SzCsEqXS_5YYzr84m2aPAdNM="
    },
    {
        dp:"https://images.unsplash.com/photo-1762331226365-cb0183fac407?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story:"https://images.unsplash.com/photo-1693130161744-ddb696a1131d?q=80&w=692&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        dp:"https://plus.unsplash.com/premium_photo-1748205514679-0b7c7fd82220?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story:"https://images.unsplash.com/photo-1680382937566-94f993ab8d0c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        dp:"https://images.unsplash.com/photo-1752074210398-28b61c8335ea?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story:"https://images.unsplash.com/photo-1592833578500-1082e18665a3?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        dp:"https://images.unsplash.com/photo-1762509347740-0586629cdfba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D",
        story:"https://media.istockphoto.com/id/1540196997/photo/woman-tourist-in-casual-clothes-with-a-large-travel-suitcase-for-travel.jpg?s=2048x2048&w=is&k=20&c=tq7i23KKKJcqe7Sl3e-SzCsEqXS_5YYzr84m2aPAdNM="
    },
    {
        dp:"https://images.unsplash.com/photo-1762509347740-0586629cdfba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D",
        story:"https://media.istockphoto.com/id/1540196997/photo/woman-tourist-in-casual-clothes-with-a-large-travel-suitcase-for-travel.jpg?s=2048x2048&w=is&k=20&c=tq7i23KKKJcqe7Sl3e-SzCsEqXS_5YYzr84m2aPAdNM="
    }
]

let storiyan = document.querySelector('#storiyan');
let fullsc = document.querySelector('.fullscreen')

clutter  = "";

arr.forEach(function(elem,idx){
    clutter += `<div class="story">
    <img id  = "${idx}" src="${elem.dp}" alt="">
</div>`
    storiyan.innerHTML = clutter;      
})

storiyan.addEventListener('click',function(dets){
    fullsc.style.backgroundImage = `url('${arr[dets.target.id].story}')`;
    fullsc.style.display = "block";
    console.log(arr[dets.target.id].story)

    setTimeout(function(){
        fullsc.style.display = "none";

    },2000)
})