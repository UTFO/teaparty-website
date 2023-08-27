import "./teamListContainer.css"

function TeamListContaniner(props){
    return (<div className="container">
        <div className="header">
            <div classname = "person-intro">
                <div classname = "image">
                    <img src={props.image}></img>
                </div>
                <div classname = "name">{props.name}</div>
            </div>
            
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
    </div>)
}

export default TeamListContaniner