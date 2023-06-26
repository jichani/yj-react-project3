const Base_PATH = "https://gateway.marvel.com:443"
const API_KEY = process.env.REACT_APP_PUBLIC_KEY

export async function comicsList() {
    return await fetch(`${Base_PATH}/v1/public/comics?apikey=${API_KEY}`).then((res) => res.json())
}

export async function eventsList() {
    return await fetch(`${Base_PATH}/v1/public/events?apikey=${API_KEY}`).then((res) => res.json())
}
export async function charactesList(props) {
    const customLimit = props.queryKey[1]
    return await fetch(`${Base_PATH}/v1/public/characters?limit=${customLimit}&apikey=${API_KEY}`).then((res) => res.json())
}