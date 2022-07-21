// 유투브 iframe을 이용하여 영상 분할 넣기
window.onload = () => {
    function onYouTubeIframeAPIReady() {
        var Video1 = document.querySelector("#ytVideo1");
        var Video2 = document.querySelector("#ytVideo2");
        var player = new YT.Player(Video1, {
            host: 'https://www.youtube-nocookie.com', // 쿠키이슈 보완
            videoId: '3-eYngzgOGg',
            playerVars: {
                origin: window.location.host, // 쿠키이슈 보완
                playlist: '3-eYngzgOGg', // 반복재생을 위한 리스트 동일화
                loop: 1, // 반복1, 단일0
            },
        });
        var player2 = new YT.Player(Video2, {
            host: 'https://www.youtube-nocookie.com',
            videoId: '3-eYngzgOGg'
        });
    };

    onYouTubeIframeAPIReady();

}