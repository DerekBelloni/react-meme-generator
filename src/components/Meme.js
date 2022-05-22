import React, { useState } from 'react';
import '../style.css';

import memesData from "../memesData";

const Meme = () => {
  const [memeImage, setMemeImage] = useState('')

  function getMemeImage() {
    const memesArray = memesData.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    console.log(memesArray[randomNumber])
    setMemeImage(memesArray[randomNumber].url)
  }
  return (
    <main>
      <div className="form">
        <input className="form--input" type="text" placeholder="top text" name="" id="" />
        <input className="form--input" type="text" placeholder="bottom text" name="" id="" />
        <button className="form--btn" onClick={getMemeImage}>Get a new meme image 🖼</button>
      </div>
      <img src={memeImage} alt="" />
    </main>
  )
}



export default Meme;