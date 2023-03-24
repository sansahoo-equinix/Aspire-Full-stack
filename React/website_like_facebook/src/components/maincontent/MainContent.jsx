import { Icons } from "./icons/Icons"
import { Posts } from "./posts/Posts"


export const MainContent = () => {

    const icons_data = [
        {
            class_name: "story story1",
            src: "https://i.postimg.cc/TPh453Zz/upload.png",
            name: "Post Story"
            
        },
        {
            class_name: "story story2",
            src: "https://i.postimg.cc/XNPtfdVs/member-1.png",
            name: "Alison"
        },
        {
            class_name: "story story3",
            src: "https://i.postimg.cc/4NhqByys/member-2.png",
            name: "Jackson"
        },
        {
            class_name: "story story4",
            src: "https://i.postimg.cc/FH5qqvkc/member-3.png",
            name: "Samona"
        },
        {
            class_name: "story story5",
            src: "https://i.postimg.cc/Sx65bPcP/member-4.png",
            name: "John Doe"
        },

    ]

    const posts_data = [
        {
            link: "https://i.postimg.cc/9fjhGTY6/feed-image-1.png",
            like:"120",
            share:"20",
            comment:"45"
        },
        {
            link: "https://i.postimg.cc/Xvc0xJ2p/feed-image-2.png",
            like:"120",
            share:"20",
            comment:"45"
        },
        {
            link: "https://i.postimg.cc/tJ7QXz9x/feed-image-3.png",
            like:"120",
            share:"20",
            comment:"45"
        },
        {
            link: "https://i.postimg.cc/hjDRYBwM/feed-image-4.png",
            like:"120",
            share:"20",
            comment:"45"
        },
        {
            link: "https://i.postimg.cc/ZRwztQzm/feed-image-5.png",
            like:"120",
            share:"20",
            comment:"45"
        }

    ]

    return (<div class="main-content">
        <div class="story-gallery">
            {icons_data.map((obj) => {
                return <Icons class_name={obj.class_name} src={obj.src} name={obj.name} />
            })}

        </div>

        <div class="write-post-container">
            <div class="user-profile">
                <img src="https://i.postimg.cc/cHg22LhR/profile-pic.png" />
                <div>
                    <p>John Nicholson</p>
                    <small>Public <i class="fas fa-caret-down"></i></small>
                </div>
            </div>
            <div class="post-input-container">
                <textarea rows="3" placeholder="What's on your mind, John?"></textarea>
                <div class="add-post-links">
                    <a href="#"><img src="https://i.postimg.cc/QMD2BDXs/live-video.png" />Live Video</a>
                    <a href="#"><img src="https://i.postimg.cc/6pKKZn0D/photo.png" />Photo/Video</a>
                    <a href="#"><img src="https://i.postimg.cc/Pf6TBCdD/feeling.png" />Feling/Activity</a>
                </div>
            </div>
        </div>

        {posts_data.map((obj) => {
            return <Posts src={obj.link} like={obj.like} comment={obj.comment} share={obj.share} />
        })}

      

        <button type="button" class="load-more-btn">Load More</button>
    </div>
    )

}