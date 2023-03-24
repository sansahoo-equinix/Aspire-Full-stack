import { Social } from "./social/Social"
export const LeftSideBar=()=>{
    //  const data = [
        
    return<div class="left-sidebar">
    <div class="imp-links">
        <Social redirect="#" link="https://i.postimg.cc/MpBwMtV0/news.png" name="Latest News"/>
        <Social redirect="#" link="https://i.postimg.cc/MpBwMtV0/friends.png" name="Friendss"/>
        <Social redirect="#" link="https://i.postimg.cc/44FRWj1b/group.png" name="Group"/>
        <Social redirect="#" link="https://i.postimg.cc/0jh39RtT/marketplace.png" name="Marketplace"/>
        <Social redirect="#" link="https://i.postimg.cc/VsXHCTVk/watch.png" name="Watch"/>
        <a href="#">See More</a>
    </div>
    <div class="shortcut-link">
        <p>Your Shortcuts</p>
        <Social redirect="#" link="https://i.postimg.cc/3JHVf7vG/shortcut-1.png" name="Web Developers"/>
        <Social redirect="#" link="https://i.postimg.cc/3JHVf7vG/shortcut-2.png" name="Web Design course"/>
        <Social redirect="#" link="https://i.postimg.cc/3JHVf7vG/shortcut-3.png" name="Full Strack Development"/>
        <Social redirect="#" link="https://i.postimg.cc/3JHVf7vG/shortcut-4.png" name="Website Experts"/>
    </div>
</div>
}