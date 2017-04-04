var player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player('yt', {
    height: '100%',
    width: '100%',
    videoId: 'hFm4PBQghgA',
    playerVars: {
      modestbranding: 1
    }
  });
}

$(function(){
  $('#video').popup({
    transition: 'all 0.5s',
    onopen() {
      player.playVideo();
    },
    onclose() {
      player.stopVideo();
    }
  });
});
