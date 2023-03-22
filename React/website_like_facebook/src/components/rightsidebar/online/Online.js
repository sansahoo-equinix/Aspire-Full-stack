export const Online=(props)=>{
    return <div class="online-list">
    <div class="online">
        <img src={props.src}/>
    </div>
    <p>{props.name}</p>
</div>
}