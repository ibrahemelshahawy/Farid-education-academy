
const smallList = document.getElementById("small_main_list");


function openList() {
    let check = document.querySelector(".listOped")

    if (!check) {
        smallList.style.display = "block"
        smallList.style.zIndex = "1"
        smallList.classList.add("listOped")
    } else {
        smallList.style.display = "none"
        // smallList.style.zIndex = "-2555555"
        smallList.classList.remove("listOped")
    }



}


const videos = JSON.parse(localStorage.getItem("courseVedioes"))

const contentParent = document.getElementById("tabel_of_content");
// let videoContiner = document.getElementById("video_to_show")

for(i=0; i < videos.length; i++){

    let contentList = document.createElement("ul");
    contentList.classList.add("content_list")

    let videoTab = document.createElement("li")
    videoTab.classList.add("video_tab")
    videoTab.id = videos[i].videoId
    let videoName = document.getElementById("Video_name")
    videoName.innerText = videos[0].title
    // videoTab[0].classList.add("videoBlaying")

    contentParent.append(contentList)
    contentList.append(videoTab)


    videoTab.innerText = videos[i].title


}


document.addEventListener("DOMContentLoaded", function() {
    let videoContainer = document.getElementById("video_to_show");
    let courseName = document.getElementById("course_name")

    let iframeElement = document.createElement("iframe");
    iframeElement.classList.add("playing_video");
    iframeElement.src = videos[0].videoUrl; 
    iframeElement.setAttribute("frameborder", "0"); 
    iframeElement.setAttribute("allowfullscreen", true);
    videoContainer.appendChild(iframeElement);
    courseName.innerText = videos[0].course
});



function openTapelOfContent(){

    let check = document.querySelector(".checkTaple")

    if(!check){
        contentParent.style.display= "block"
        contentParent.classList.add("checkTaple")
    } else{
        contentParent.style.display= "none"
        contentParent.classList.remove("checkTaple")
    }

}
// videoContent.autoplay= "true"
let videoToShow = document.querySelectorAll(".video_tab");

videoToShow.forEach(video => {
    video.addEventListener("click", e => {
        e.stopPropagation();

        let nextVideo = videos.filter(v => v.videoId == e.target.id);
        console.log(nextVideo);
        let Nvideo= document.querySelector(".playing_video")
        Nvideo.src = nextVideo[0].videoUrl
        // video.classList.add("videoBlaying")
        let videoName = document.getElementById("Video_name")
        videoName.innerText=nextVideo[0].title
    });
});



function logOut(){
    window.location.href = "../index.html"
    localStorage.removeItem("user_profile_data")
  }