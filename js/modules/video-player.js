
export function video_player(video){

    console.log(video.id);
    video_player_switch_cover(video.id);
    const main_video_iframe = document.getElementById("main-video-iframe");
    main_video_iframe.setAttribute("src","https://www.youtube-nocookie.com/embed/"+video.yt_id+"?autoplay=0&rel=0");
    document.location.href = "#video-anchor";
}

function video_player_switch_cover(video_id){
  
    /*Clear excepert and show thumbnails*/
    let videos_thumbnail = document.getElementsByClassName("video-item-thumbnail");
    let videos_excerpt = document.getElementsByClassName("video-item-excerpt");
    for(let i=0; i<=videos_thumbnail.length-1;i++){
          let video_thumbnail = videos_thumbnail[i];
          video_thumbnail.classList.remove("inactive")
    }
    for(let i=0; i<=videos_excerpt.length-1;i++){
        let video_excerpt = videos_excerpt[i];
        video_excerpt.classList.add("inactive")
    }

    let video_thumbnail = document.querySelector(`#video_${video_id} .video-item-thumbnail`);
    let video_excerpt   = document.querySelector(`#video_${video_id} .video-item-excerpt`);

    video_thumbnail.classList.add("inactive");
    video_excerpt.classList.remove("inactive");
}