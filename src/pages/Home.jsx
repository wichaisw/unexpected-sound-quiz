import React from 'react';
import PrimaryButton from '../components/PrimaryButton';
import { Link } from "react-router-dom";
import hero from '../assets/images/suspect.png';


export default function Home() {
  return (
    <div style={{zIndex: -1}} className="flex flex-col w-full min-h-screen inset-0 items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <h2 className="text-white font-bold text-4xl">นั่นเสียงอะไรน่ะ !?</h2>
      <figure className="p-6">
        <img src={hero} alt="hero" className="rounded-full border-black border-2" />
      </figure>
      <p>คุณหลงมายังเว็บปริศนาแห่งหนึ่ง ทันใดเสียงอิหยังดังขึ้น คุณหันไปพบว่านั่นเป็นเสียงของ...</p>
      <Link to="/questions" className="z-50 p-2">
        <PrimaryButton text="Come What May" />
      </Link>
    </div>
  )
}
