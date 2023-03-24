import { Social } from "./social/Social"
export const LeftSideBar=()=>{
     const data = [
        {
            redirect:"#",
            link:"https://i.postimg.cc/MpBwMtV0/news.png",
            name:"Latest News"
        },
        {
            redirect:"#",
            link:"https://i.postimg.cc/MpBwMtV0/friends.png",
            name:"Friendss"
        },
        {
            redirect:"#",
            link:"https://i.postimg.cc/44FRWj1b/group.png",
            name:"Group"
        },
        {
            redirect:"#",
            link:"https://i.postimg.cc/0jh39RtT/marketplace.png",
            name:"Marketplace"
        },
        {
            redirect:"#",
            link:"https://i.postimg.cc/VsXHCTVk/watch.png",
            name:"Watch"
        },
     ]
     const shortcut = [
        {
            redirect:"#",
            link:"https://i.postimg.cc/3JHVf7vG/shortcut-1.png",
            name:"Web Developers"
        },
        {
            redirect:"#",
            link:"https://i.postimg.cc/3JHVf7vG/shortcut-2.png",
            name:"Web Design course"
        },
        {
            redirect:"#",
            link:"https://i.postimg.cc/3JHVf7vG/shortcut-3.png",
            name:"Full Strack Development"
        },
        {
            redirect:"#",
            link:"https://i.postimg.cc/3JHVf7vG/shortcut-4.png",
            name:"Website Experts"
        }
     ]

    return<div class="left-sidebar">
    <div class="imp-links">

        {data.map((obj)=>{
             return <Social redirect={obj.redirect} link={obj.link} name={obj.name}/>
        })}
       
       
        <a href="#">See More</a>
    </div>
    <div class="shortcut-link">
        <p>Your Shortcuts</p>
        {shortcut.map((obj)=>{
             return <Social redirect={obj.redirect} link={obj.link} name={obj.name}/>
        })}
    
    </div>
</div>
}