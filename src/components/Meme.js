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

  function handleChange(event) {
    const { name, value } = event.target
    setMeme(prevMeme => ({
      ...prevMeme,
      [name]: value
    }))
    console.log("[top text]:", meme.topText)
    console.log("[bottom text]:", meme.bottomText)
  }

  return (
    <main>
      <div className="form">
        <input className="form--input" type="text" placeholder="top text" name="topText" value={meme.topText} onChange={handleChange} />
        <input className="form--input" type="text" placeholder="bottom text" name="bottomText" value={meme.bottomText} onChange={handleChange} />
        <button className="form--btn" onClick={getMemeImage}>Get a new meme image 🖼</button>
      </div>
      <div className="meme">
        <img className="meme--image" src={meme.randomImage} alt="" />
        <h2 className="meme--text--top">{meme.topText}</h2>
        <h2 className="meme--text--bottom">{meme.bottomText}</h2>
      </div>
    </main>
  )
}



export default Meme;