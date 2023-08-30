import "./aboutListContainer.css"

function AboutListContaniner(props){
    return (
    <div className="container">
        <div className="header">
            <div classname = "title">{props.name}</div>
            <div classname = "buttons">
                <button classname="edit-button" onClick={props.editFunction}>
                    <img src="/pencil.png"></img>
                </button>
                <button className="trash-button" onClick={props.deleteFunction}>
                    <img src="/trash.png"></img>
                </button>
            </div>
        </div>
        <div className="text">
            {props.text}
        </div>
    </div>
    )
}

export default AboutListContaniner