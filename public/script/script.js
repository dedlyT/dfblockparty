const audio = new Audio("http://localhost:3000/music/test.mp3")
var playpause = false;

$(() => {
    $("#playpause").click(() => {
        $.post("http://localhost:3000/playpause-music", {secret:"299934"});
    });

    function music_manager() {
        //QUERY MUSIC STATUS
        $.ajax({
            url: "http://localhost:3000/query-paused",
            type: "GET",
            dataType: "json",
            success: (res) => {
                playpause = res;
            }
        });

        //ACT ON STATUS
        if (playpause) {
            if (audio.paused) { audio.play(); }
        } else {
            if (!audio.paused) { audio.pause(); }
        }
    }
    
    setInterval(music_manager, 1);
});