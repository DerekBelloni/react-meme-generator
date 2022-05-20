import React from 'react';
import '../style.css';

const Meme = () => {
  return (
    <main>
      <form className="form">
        <input className="form--input" type="text" placeholder="top text" name="" id="" />
        <input className="form--input" type="text" placeholder="bottom text" name="" id="" />
        <button className="form--btn">Get a new meme image 🖼</button>
      </form>
    </main>
  )
}



export default Meme;