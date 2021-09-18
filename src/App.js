import './App.css';
import GifList from "./components/GifList"
import Form from "./components/Form"
import React, { useState } from 'react'

function App() {
  const [gifList, setGifList] = useState([])

  function handleListChange (list) {
    setGifList(list)
  }

  return (
    <div className="App center">
      <Form onSubmit={handleListChange} />
      <GifList gifList={gifList} />
    </div>
  );
}

export default App;
