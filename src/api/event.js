import {API_ENDPOINT} from '.'
export const getEvent = async () => {
    const response = await fetch(`${API_ENDPOINT}/event`)
    const data = await response.json()
    return data
}

export const newEvent = async (name, address, date, time, type) => {
    const response = await fetch(`${API_ENDPOINT}/event`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            address: address,
            date: date,
            time: time,
            type: type,
        })
    })
    const data = await response.json()
    return data
}

export const updateEvent = async (id, name, address, date, time, type) => {
    const response = await fetch(`${API_ENDPOINT}/event/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            address: address,
            date: date,
            time: time,
            type: type,
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