var tag=document.createElement("script");const buttonWatch=document.querySelector(".video-agency__button"),popupVideo=document.querySelector(".video-agency__popup"),popupClose=document.querySelector(".video-agency__popup-close"),youtubePlayer=document.getElementById("player");tag.src="https://www.youtube.com/iframe_api";var firstScriptTag=document.getElementById("youtube");firstScriptTag.parentNode.insertBefore(tag,firstScriptTag);const onDocumentClick=e=>{player.stopVideo(),popupVideo.style.display="none"};function onYouTubePlayerAPIReady(){player=new YT.Player(youtubePlayer,{events:{onReady:onPlayerReady}})}function onPlayerReady(e){buttonWatch.addEventListener("click",()=>{e.target.playVideo(),popupVideo.style.display="block"}),popupClose.addEventListener("click",()=>{e.target.stopVideo(),popupVideo.style.display="none"})}