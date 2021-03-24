var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      function onYouTubeIframeAPIReady() {
        new YT.Player('player', { // <div id="player"></div>
          videoId: 'An6LvWQuj_8',  // youtube의 id
          playerVars: {
            autoplay: true,
            loop: true,
            playlist: 'An6LvWQuj_8'  // 반복 재생할 유튜브 영상 ID 목록
          },
          events: {
            onReady: function (event) {
              event.target.mute()  // 음소거
            }
          }
        });
      }