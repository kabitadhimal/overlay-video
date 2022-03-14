function disableScroll() {
    // Get the current page scroll position
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
  
        // if any scroll is attempted, set this to the previous value
        window.onscroll = function() {
            window.scrollTo(scrollLeft, scrollTop);
        };
}
  
function enableScroll() {
    window.onscroll = function() {};
}
function playHeroVideo(e) {

    if (e.matches) return ;
    const heroVideoWrapper = document.getElementById("hero-banner-video");
    if(!heroVideoWrapper) return;
   // disableScroll();
    const heroContentWrapper = document.querySelector("#hero-banner-video .container");
    var heroVideo = document.createElement('video');
    heroVideo.className = "hero-video"
    heroVideo.setAttribute("src","http://localhost/overlay-video/video/sample-video.mp4");
    heroVideo.setAttribute("autoplay",true);
    heroVideo.setAttribute("muted","muted");

  //  heroVideo.setAttribute("controls",false);
    heroVideoWrapper.appendChild(heroVideo);
    heroVideo.muted = true;
    heroVideo.controls = false;
    heroVideo.play();
};

function videoEndsCallBack(e){

    if (e.matches) return ;
    const video = document.querySelector('video');
    if(!video) return;

    const heroWrapper = document.getElementById("hero-banner-video");
    heroWrapper.style.transitionDuration = '0s';
    video.addEventListener('ended', (event) => {
        video.classList.add('anim-fade-out');
        heroWrapper.style.background = "#ff0000";

        var heroVideo = document.querySelector("video");
        setTimeout(function(){
            heroVideo.remove();
        },600)
        
        const heroContentWrapper = document.querySelector("#hero-banner-video .container");
        heroContentWrapper.style.opacity = 1;
        heroContentWrapper.classList.add("fade-in-hero-block");
        //enableScroll();
    });
}

// Checking Media and Hiding Video for Mobile
const mediaQuery = window.matchMedia('(max-width: 750px)')
playHeroVideo(mediaQuery);
videoEndsCallBack(mediaQuery);