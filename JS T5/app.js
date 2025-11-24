const employees = [
  {
    name: "Aarav Sharma",
    role: "Frontend Developer",
    photo: "https://randomuser.me/api/portraits/men/11.jpg",
    description: "Aarav specializes in React and loves creating smooth, responsive UIs."
  },
  {
    name: "Riya Verma",
    role: "UI/UX Designer",
    photo: "https://randomuser.me/api/portraits/women/22.jpg",
    description: "Riya focuses on user-centered design and aesthetic interfaces."
  },
  {
    name: "Kabir Singh",
    role: "Backend Developer",
    photo: "https://randomuser.me/api/portraits/men/33.jpg",
    description: "Kabir builds scalable backend systems and REST APIs using Node.js."
  },
  {
    name: "Meera Joshi",
    role: "Project Manager",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    description: "Meera ensures efficient project delivery and smooth team communication."
  },
  {
    name: "Rohan Gupta",
    role: "Mobile App Developer",
    photo: "https://randomuser.me/api/portraits/men/55.jpg",
    description: "Rohan develops cross-platform apps using Flutter."
  },
  {
    name: "Ananya Patel",
    role: "QA Engineer",
    photo: "https://randomuser.me/api/portraits/women/66.jpg",
    description: "Ananya is passionate about testing and ensuring bug-free releases."
  },
  {
    name: "Siddharth Mehta",
    role: "DevOps Engineer",
    photo: "https://randomuser.me/api/portraits/men/77.jpg",
    description: "Siddharth automates pipelines and manages cloud infrastructure."
  },
  {
    name: "Isha Kapoor",
    role: "Full-Stack Developer",
    photo: "https://randomuser.me/api/portraits/women/88.jpg",
    description: "Isha works across frontend and backend with strong MERN expertise."
  },
  {
    name: "Neeraj Bhandari",
    role: "Data Analyst",
    photo: "https://randomuser.me/api/portraits/men/99.jpg",
    description: "Neeraj turns raw data into actionable insights using Python."
  }
];

let main = document.querySelector('main');

let cluster='';

employees.forEach(function(elem){
  cluster+=`<div class="card">
            <img src="${elem.photo}" alt="">
            <h1>${elem.name}</h1>
            <h2>${elem.role}</h2>
            <p>${elem.description}</p>
        </div>`;

})

main.innerHTML = cluster;