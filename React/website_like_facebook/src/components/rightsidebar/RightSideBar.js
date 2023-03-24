import { Online } from "./online/Online"
import { Event } from "./event/Event"

export const RightSideBar=()=>{
    const data = [
        {"day":"18","month":"March", "heading":"Social Media", "desc":"Willson Tech Park", "info":"More Info"},
        {"day":"22","month":"June", "heading":"Mobile Marketing", "desc":"Willson Tech Park","info":"More Info"}
    ]
    const eventComp = data.map((e)=>{
        return (<Event e={e} />)
    })
    return <div class="right-sidebar">
    <div class="sidebar-title">
        <h4>Events</h4>
        <a href="#">See All</a>
    </div>
    
    {/* <Event day="18" month="March" heading="Social Media" desc="Willson Tech Park" info="More Info"/>
    <Event day="22" month="June" heading="Mobile Marketing" desc="Willson Tech Park" info="More Info"/> */}
    {eventComp}
    
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