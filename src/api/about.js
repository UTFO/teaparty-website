import API_ENDPOINT from './index'
export const getAbout = async () => {
    const response = await fetch(`${API_ENDPOINT}/about`)
    const data = await response.json()
    return data
}

export const newAbout = async (title, description) => {
    const response = await fetch(`${API_ENDPOINT}/about`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: title,
            description: description,
        })
    })
    const data = await response.json()
    return data
}

export const updateAbout = async (id, title, description) => {
    const response = await fetch(`${API_ENDPOINT}/about/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: title,
            description: description,
        })
    })
    const data = await response.json()
    return data
}

export const deleteAbout = async (id) => {
    const response = await fetch(`${API_ENDPOINT}/about/${id}`, {
        method: 'DELETE',
    })
    const data = await response.json()
    return data
}