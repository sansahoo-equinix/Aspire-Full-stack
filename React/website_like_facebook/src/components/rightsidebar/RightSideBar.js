import { Online } from "./online/Online"


export const RightSideBar=()=>{
    return <div class="right-sidebar">
    <div class="sidebar-title">
        <h4>Events</h4>
        <a href="#">See All</a>
    </div>
    <div class="event">
        <div class="left-event">
            <h3>18</h3>
            <span>March</span>
        </div>
        <div class="right-event">
            <h4>Social Media</h4>
            <p><i class="fas fa-map-marker-alt"></i> Willson Tech Park</p>
            <a href="#">More Info</a>
        </div>
    </div>
    <div class="event">
        <div class="left-event">
            <h3>22</h3>
            <span>June</span>
        </div>
        <div class="right-event">
            <h4>Mobile Marketing</h4>
            <p><i class="fas fa-map-marker-alt"></i> Willson Tech Park</p>
            <a href="#">More Info</a>
        </div>
    </div>
    <div class="sidebar-title">
        <h4>Advertisement</h4>
        <a href="#">close</a>
    </div>
    <img src="https://i.postimg.cc/CLXYx9BL/advertisement.png" class="siderbar-ads"/>
    <div class="sidebar-title">
        <h4>Conversation</h4>
        <a href="#">Hide Chat</a>
    </div>

    <Online src="https://i.postimg.cc/XNPtfdVs/member-1.png" name="Alison Mina"/>
    <Online src="https://i.postimg.cc/4NhqByys/member-2.png" name="Alison Mina"/>
    <Online src="https://i.postimg.cc/FH5qqvkc/member-3.png" name="Alison Mina"/>
    <Online src="https://i.postimg.cc/Sx65bPcP/member-4.png" name="Alison Mina"/>
    <Online src="https://i.postimg.cc/XNPtfdVs/member-1.png" name="Alison Mina"/>
   
</div>
}