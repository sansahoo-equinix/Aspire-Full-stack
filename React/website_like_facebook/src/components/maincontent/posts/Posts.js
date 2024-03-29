export const Posts=(props)=>{
   
    return  <div class="post-container">
    <div class="post-row">
        <div class="user-profile">
            <img src="https://i.postimg.cc/cHg22LhR/profile-pic.png"/>
            <div>
                <p>John Nicholson</p>
               <span>June 24 2021, 13:40 pm</span>
            </div>
        </div>
        <a href="#"><i class="fas fa-ellipsis-v"></i></a>
    </div>
    <p class="post-text">Subscribe <span>@Vkive Tutorials</span> Youtube Channel to watch more videos on 
    website development and UI desings. <a href="#">#VkiveTutorials</a> <a href="#">#YoutubeChannel</a></p>
    <img src={props.src} class="post-img"/>
    <div class="post-row">
        <div class="activity-icons">
            <div><img src="https://i.postimg.cc/pLKNXrMq/like-blue.png"/>{props.like}</div>
            <div><img src="https://i.postimg.cc/rmjMymWv/comments.png"/>{props.comment}</div>
            <div><img src="https://i.postimg.cc/T2bBchpG/share.png"/>{props.share}</div>
        </div>
        <div class="post-porfile-icon">
            <img src="https://i.postimg.cc/cHg22LhR/profile-pic.png"/><i class="fas fa-caret-down"></i>
        </div>
    </div>
</div>
}