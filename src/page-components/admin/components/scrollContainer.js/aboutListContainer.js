import "./aboutListContainer.css"

function aboutListContaniner(props){
    <div className="container">
        <div className="header">
            <div classname = "title">{props.title}</div>
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
}

export default aboutListContaniner