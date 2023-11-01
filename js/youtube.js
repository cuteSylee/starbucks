// 2. This code loads the IFrame Player API code asynchronously.
const tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() {
  new YT.Player("player", {
    videoId: "dl1IkOkPblw", //최초 재생할 유튜브 영상 ID
    playerVars: {
      autoplay: true,
      loop: true,
      palyList: "dl1IkOkPblw", //반복 재생할 유튜브 영상 ID 목록
    },
    events: {
      onReady: function (event) {
        event.target.mute(); //음소거
      },
    },
  });
}
