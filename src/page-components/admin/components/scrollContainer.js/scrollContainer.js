import './scrollContainer.css'

function ListContainer(props) {
    return (
    <div style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'row', backgroundColor: '#ECECEC', padding: 10, borderRadius: '19pt'  }}>
        <div style={{display: 'flex', flexDirection: 'row'}}>
            {props.image && <img src={props.image}/>}
            <p style={{}}>{props.title}</p>
        </div>
        <div style={{display: 'flex', flexDirection: 'row'}}>
            <button className="admin-hover-image" style={{lineHeight: 1, backgroundColor: 'transparent', borderWidth: 0, cursor: 'pointer'}} onClick={props.editFunction}><img src="/pencil.png"/></button> 
            <button className="admin-hover-image" style={{lineHeight: 1, backgroundColor: 'transparent', borderWidth: 0, cursor: 'pointer'}} onClick={props.deleteFunction}><img src="/trash.png"/></button> 

        </div>
    </div>
    )
}

function ScrollContainer(props) {
    return (
    <div>
        <div style={{borderBottom: '1px solid black', display: 'flex', justifyContent: 'end', marginBottom: 10}}>
            <button className="admin-hover-image" style={{backgroundColor: 'transparent', borderWidth: 0, cursor: 'pointer'}} onClick={props.function}><img src="/plus.png"/></button>
        </div>
        <div className="admin-scroll-container">
            <ListContainer/>
            {props.children}
        </div>

    </div>
    )
}

export { ScrollContainer }