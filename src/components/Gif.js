export default function Gif({img}) {
    return (
        <div className="flex center items-center p-4 bg-yellow-100 border-2 border-gray-200 rounded-lg shadow-sm dark:bg-gray-800">
            <img className="mx-auto" alt="gif" src={img}></img>
        </div>
    )
}