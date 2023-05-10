import API_ENDPOINT from '.'
export const getEvent = async () => {
    const response = await fetch(`${API_ENDPOINT}/event`)
    const data = await response.json()
    return data
}

export const newEvent = async (name, location, date, time) => {
    const response = await fetch(`${API_ENDPOINT}/event`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            location: location,
            date: date,
            time: time,
        })
    })
    const data = await response.json()
    return data
}

export const updateEvent = async (id, name, location, date, time) => {
    const response = await fetch(`${API_ENDPOINT}/event/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            location: location,
            date: date,
            time: time,
        })
    })
    const data = await response.json()
    return data
}

export const deleteEvent = async (id) => {
    const response = await fetch(`${API_ENDPOINT}/event/${id}`, {
        method: 'DELETE',
    })
    const data = await response.json()
    return data
}