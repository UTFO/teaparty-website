import API_ENDPOINT from './index'
export const getTeam = async () => {
    const response = await fetch(`${API_ENDPOINT}/team`)
    const data = await response.json()
    return data
}

export const newTeam = async (name, role, linkedin, twitter, instagram, image, message) => {
    const response = await fetch(`${API_ENDPOINT}/team`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            role: role,
            linkedin: linkedin,
            twitter: twitter,
            instagram: instagram,
            image: image,
            message: message,
        })
    })
    const data = await response.json()
    return data
}

export const updateTeam = async (id, name, role, linkedin, twitter, instagram, image, message) => {
    const response = await fetch(`${API_ENDPOINT}/team/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            role: role,
            linkedin: linkedin,
            twitter: twitter,
            instagram: instagram,
            image: image,
            message: message,
        })
    })
    const data = await response.json()
    return data
}

export const deleteTeam = async (id) => {
    const response = await fetch(`${API_ENDPOINT}/team/${id}`, {
        method: 'DELETE',
    })
    const data = await response.json()
    return data
}