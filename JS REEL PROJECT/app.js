const reels = [
  {
    isMuted: true,
    username: "tech_guru",
    userProfilePic: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
    likeCount: 1200,
    shareCount: 140,
    commentCount: 85,
    isFollow:true,
    isLike:false,
    title: "New JavaScript Trick!",
    videoLink: "https://www.w3schools.com/html/mov_bbb.mp4"
  },
  {
    isMuted: true,
    username: "travel_with_me",
    userProfilePic: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe",
    likeCount: 5400,
    shareCount: 310,
    commentCount: 420,
    isFollow:false,
    isLike:false,
    title: "Sunset in Bali 🌅",
    videoLink: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4"
  },
  {
    isMuted: true,
    username: "fitness_freak",
    userProfilePic: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    likeCount: 2500,
    shareCount: 190,
    commentCount: 130,
    isFollow:true,
    isLike:true,
    title: "5-Minute Morning Workout 💪",
    videoLink: "https://samplelib.com/lib/preview/mp4/sample-10s.mp4"
  },
  {
    isMuted: true,
    username: "foodie_world",
    userProfilePic: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    likeCount: 8700,
    shareCount: 610,
    isFollow:true,
    isLike:false,
    commentCount: 550,
    title: "Crispy Street Momos 😍",
    videoLink: "https://www.w3schools.com/html/movie.mp4"
  },
  {
    isMuted: true,
    username: "coder_life",
    userProfilePic: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    likeCount: 1500,
    shareCount: 90,
    isFollow:false,
    isLike:false,
    commentCount: 70,
    title: "Debugging at 2 AM be like…",
    videoLink: "https://samplelib.com/lib/preview/mp4/sample-20s.mp4"
  },
  {
    isMuted: true,
    username: "pet_paradise",
    userProfilePic: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
    likeCount: 5300,
    shareCount: 280,
    commentCount: 310,
    isFollow:true,
    isLike:false,
    title: "Dog reacts to magic trick 🐶✨",
    videoLink: "https://samplelib.com/lib/preview/mp4/sample-15s.mp4"
  },
  {
    isMuted: true,
    username: "dance_vibes",
    userProfilePic: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    likeCount: 9200,
    shareCount: 750,
    isFollow:true,
    isLike:true,
    commentCount: 680,
    title: "Trending choreography 🔥",
    videoLink: "https://samplelib.com/lib/preview/mp4/sample-30s.mp4"
  },
  {
    isMuted: true,
    username: "car_showcase",
    userProfilePic: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    likeCount: 4600,
    shareCount: 340,
    isFollow:false,
    isLike:true,
    commentCount: 260,
    title: "2025 Tesla Model Z Review ⚡",
    videoLink: "https://www.pexels.com/download/video/33711928/"
  },
  {
    isMuted: true,
    username: "funny_moments",
    userProfilePic: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    likeCount: 11000,
    shareCount: 820,
    isFollow:true,
    isLike:false,
    commentCount: 900,
    title: "Try not to laugh challenge 😂",
    videoLink: "https://www.pexels.com/download/video/34691906/"
  },
  {
    isMuted: true,
    username: "art_attack",
    userProfilePic: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    likeCount: 3700,
    shareCount: 250,
    isFollow:true,
    isLike:false,
    commentCount: 190,
    title: "Satisfying paint strokes 🎨",
    videoLink: "https://www.pexels.com/download/video/34475371/"
  }
];


let allReels = document.querySelector('.allreels');

function addData(){
  let sum='';

  reels.forEach(function(reel,idx){
    sum+=`<div class="reel">
                      <div id="${idx}" class="mute">
                        ${reels[idx].isMuted?'<i class="ri-volume-mute-line"></i>':'<i class="ri-volume-up-line"></i>'}
                      </div>
                      <video autoplay loop ${reels[idx].isMuted?'muted':''} src=${reel.videoLink}></video>
                      <div class="bottom">
                          <div class="user">
                              <img src=${reel.userProfilePic} alt="">
                              <h3>${reel.username}</h2>
                              <button id="${idx}" class="follow">${reel.isFollow?'Followed':'Follow'}</button>
                          </div>
                          <h2>${reel.title}</h2>
                      </div>
                      <div class="right">
                              <div id="${idx}" class="like">
                                  <h2>${reel.isLike?'<i class="ri-heart-fill"></i>':'<i class="ri-heart-line"></i>'}</h2>
                                  <h4>${reel.likeCount}</h4>
                              </div>
                              <div id="${idx}" class="comment">
                                  <h2><i class="ri-chat-3-line"></i></h2>
                                  <h4>${reel.commentCount}</h4>
                              </div>
                              <div class="share">
                                  <h2><i class="ri-share-forward-line"></i></h2>
                                  <h4>${reel.shareCount}</h4>
                              </div>
                              <div class="dots">
                                  <h2><i class="ri-more-2-line"></i></h2>
                                  <h4>More</h4>
                              </div>

                          </div>
                  </div>`
    allReels.innerHTML=sum;

})

  
  
}

addData();


allReels.addEventListener('click',function(dets){

  console.log(dets.target.id)
  if(dets.target.className=='like'){
    
    if(reels[dets.target.id].isLike){
      reels[dets.target.id].likeCount--;
      reels[dets.target.id].isLike=false;

    }
    else{
      reels[dets.target.id].likeCount++;
      reels[dets.target.id].isLike=true;
    }
    addData();
    
  }

  if(dets.target.className=='follow'){
    
    if(reels[dets.target.id].isFollow){
      reels[dets.target.id].isFollow=false;

    }
    else{ 
      reels[dets.target.id].isFollow=true;
    }
    addData();
    
  }

  if(dets.target.className=='mute'){
    
    if(reels[dets.target.id].isMuted){
      reels.forEach(function(val){
        val.isMuted = true;
      })



      reels[dets.target.id].isMuted=false;

    }
    else{ 
      reels[dets.target.id].isMuted=true;
    }
    addData();
    
  }


})
