
export function load_videos_thumbnails(videos_api)
{
   const videos_container = document.getElementById("videos-items");
   

   /**Loop all videos and create DOM */
   videos_api.forEach(video => {

      //Create video-item div
      let  video_item = document.createElement("div");
      video_item.classList.add("video-item");
      video_item.setAttribute("id", "video_" + video.id);

      //Create video-item-thumbnail div
      let video_thumbnail = document.createElement("div")
      video_thumbnail.classList.add("video-item-thumbnail");
      video_thumbnail.style.backgroundImage = `url('./img/${ video.path_cover }')`;

      //Create video-item-excerpt div and text
      let video_excerpt   = document.createElement("div");
      video_excerpt.classList.add("video-item-excerpt");
      video_excerpt.classList.add("inactive");
      let excerpt_p    = document.createElement("p");
      let excerpt_txt  = document.createTextNode(video.Excerpt);
      excerpt_p.appendChild(excerpt_txt);
      video_excerpt.appendChild(excerpt_p);

      //Create title video
      let video_title      = document.createElement("p");
      let video_title_txt = document.createTextNode(video.title)
      video_title.appendChild(video_title_txt);

      video_item.appendChild(video_thumbnail);
      video_item.appendChild(video_excerpt);
      video_item.appendChild(video_title);
     
      //DOM
      videos_container.appendChild(video_item);
   });
  
}

