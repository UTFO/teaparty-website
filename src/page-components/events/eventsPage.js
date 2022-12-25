import './eventsPage.css';


function EventForm(props) {
    return (
        <div className="page-events-board-slot">
        </div>
    )
}

function Events() {
    
    return <>
    
        <div className="page-events-board">
            <div className="page-events-board-container">
                <EventForm name="A" date="NOV 18" time="14:32 PM" address="Hart House"/>
                <EventForm name="A" date="NOV 18" time="14:32 PM" address="Hart House"/>
                <EventForm name="A" date="NOV 18" time="14:32 PM" address="Hart House"/>
                <EventForm name="A" date="NOV 18" time="14:32 PM" address="Hart House"/>
            </div>
        </div>

    </>
}

export default Events;