import { useState } from 'react';
import axios from 'axios';

export default function Form({onSubmit}) {
    const [search, setSearch] = useState("")

    function handleInput(value) {
        setSearch(value)
    }

    async function handleSubmit(event) {
        const key = "ur8sKa88o5YJg8iulM0iYStuzZAuOiQC"
        const getUrl = `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${search}&limit=10&rating=g`
        event.preventDefault()
        const data = await axios.get(getUrl)
        const gifData = data.data.data
        onSubmit(gifData)
    }

    return (
        <div className="container mx-auto bg-blue-300 my-5 w-full max-w-xs rounded text-center">
            <form className="mainForm shadow-md rounded px-8 pt-6 pb-8 mb-4 space-y-2">
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" value={search} placeholder="Gif Search" onChange={(event) => handleInput(event.target.value)} />
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={(event) => handleSubmit(event)}>Search</button>
            </form>
        </div>
    )
}