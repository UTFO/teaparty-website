import { API_ENDPOINT } from '.'
export const getLinks = async () => {
    const response = await fetch(`${API_ENDPOINT}/links`)
    const data = await response.json()
    return data
}
export const updateLinks = async (id, header, text, image) => {
    const response = await fetch(`${API_ENDPOINT}/links/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            header: header,
            text: text,
            image: image,
        })
    })
    const data = await response.json()
    return data
}