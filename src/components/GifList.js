import React from 'react'
import Gif from "./Gif"

export default function GifList({gifList}) {
    const listObjects = gifList.map((gif, index) => {
       return(<Gif img={gif.images.fixed_height.url} />)
    })

    return (
        <div className="grid grid-cols-3 container gap-5 mx-auto">
            {listObjects}
        </div>
    )
}