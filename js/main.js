import { videos_api } from "./modules/videos-api.js";
import { load_videos_thumbnails } from "./modules/load-videos-thumbnails.js";
import { video_player } from "./modules/video-player.js";
import { count_down } from "./modules/count-down.js";

//Countdown
count_down();

/**Load all videos first time*/
const videos_api_obj = videos_api();
load_videos_thumbnails(videos_api_obj);

/**Set first video*/
video_player(videos_api_obj[0]);

/**Listen to event click for all video items and call video_player_function*/
const videos_items = document.getElementsByClassName("video-item");
for(let i = 0; i < videos_items.length; i++){
    videos_items[i].addEventListener('click', ()=>{
       /**
        * Get: video_{id}
        * Substring only get id
        */
       const video_id   = videos_items[i].id.substring(6);
       let video_obj    = videos_api_obj.filter(video=>{ return video.id==video_id});  
       video_player(video_obj[0]);
    });
}

