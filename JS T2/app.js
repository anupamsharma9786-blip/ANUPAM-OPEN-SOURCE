let teams = [
    {
        name: "Chennai Super Kings",
        primaryColor: "yellow",
        secondaryColor: "blue",
        championshipsWon: 4
    },
    {
        name: "Mumbai Indians",
        primaryColor: "blue",
        secondaryColor: "gold",
        championshipsWon: 5
    },
    {
        name: "Kolkata Knight Riders",
        primaryColor: "purple",
        secondaryColor: "gold",
        championshipsWon: 2
    },
    {
        name: "Royal Challengers Bangalore",
        primaryColor: "red",
        secondaryColor: "black",
        championshipsWon: 0
    },
    {
        name: "Sunrisers Hyderabad",
        primaryColor: "orange",
        secondaryColor: "black",
        championshipsWon: 1
    },
    {
        name: "Delhi Capitals",
        primaryColor: "blue",
        secondaryColor: "red",
        championshipsWon: 0
    }
    ,{
        name: "Rajasthan Royals",
        primaryColor: "blue",
        secondaryColor: "pink",
        championshipsWon: 1
    }
];

let h1 = document.querySelector("h1");
let h3 = document.querySelector("h3");
let box = document.querySelector(".box");
let main = document.querySelector("main");
let button = document.querySelector("button");

button.addEventListener("click",function(){
    let winner = teams[Math.floor(Math.random()*teams.length)];


    h1.innerHTML = winner.name;
    h3.innerHTML = winner.championshipsWon;
    box.style.backgroundColor = winner.secondaryColor;
    main.style.backgroundColor = winner.primaryColor;

})