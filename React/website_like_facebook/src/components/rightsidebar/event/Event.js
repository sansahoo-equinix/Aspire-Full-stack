export const Event=(props)=>{
    return <div class="event">
    <div class="left-event">
        <h3>{props.day}</h3>
        <span>{props.month}</span>
    </div>
    <div class="right-event">
        <h4>{props.heading}</h4>
        <p> {props.desc}</p>
        <a href="#">{props.info}</a>
    </div>
</div>
}