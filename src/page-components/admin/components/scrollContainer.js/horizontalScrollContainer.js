import "./horizontalScrollContainer.css"

function horizontalScrollContainer(props){
    <div className="scrollbar">
        <div className="button">
            <button className="add-button" onClick={props.addfunction}>
                <img src = "/plus.png"/>
            </button>
        </div>
        <div className="scroll-area">{props.elements}</div>
    </div>
}

export default horizontalScrollContainer;