export const Event=(props)=>{
    return <div class="event">
    <div class="left-event">
        <h3>{props.e.day}</h3>
        <span>{props.e.month}</span>
    </div>
    <div class="right-event">
        <h4>{props.e.heading}</h4>
        <p> {props.e.desc}</p>
        <a href="#">{props.e.info}</a>
    </div>
</div>
}