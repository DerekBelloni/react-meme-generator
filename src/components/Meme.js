import React, { useState } from 'react';
import '../style.css';

import memesData from "../memesData";

const Meme = () => {
  const [memeImage, setMemeImage] = useState('')
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg"
  })

  const [allMemeImages, setAllMemeImages] = useState(memesData)


  function getMemeImage() {
    const memesArray = allMemeImages.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    const url = memesArray[randomNumber].url
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: url
    }))
  }
  return (
    <main>
      <div className="form">
        <input className="form--input" type="text" placeholder="top text" name="" id="" />
        <input className="form--input" type="text" placeholder="bottom text" name="" id="" />
        <button className="form--btn" onClick={getMemeImage}>Get a new meme image 🖼</button>
      </div>
      <div className="meme-img">
        <img src={meme.randomImage} alt="" />
      </div>
    </main>
  )
}



export default Meme;