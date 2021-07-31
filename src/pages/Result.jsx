import React,  { useState, useEffect } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import PrimaryButton from '../components/PrimaryButton';
import { Link } from "react-router-dom";

export default function Result() {
  const [ score, setScore ] = useState(0);

  useEffect(() => {
    setScore(localStorage.getItem("UNEXPECTED_SOUND_SCORE"));
  }, [])

  return (
    <div className="flex flex-col w-full min-h-screen bg-black justify-center items-center">
      <ReactAudioPlayer
        src='https://res.cloudinary.com/deaghhlei/video/upload/v1627757821/result_dh4wft.mp3'
        autoPlay
        controls
      />

      <p className="flex flex-col items-center text-white p-10 text-xl">
        <span>Result: {score} / 5</span>
        <span>คุณมีหูที่ดี</span>
        <span>ตอนนี้คุณกำลังได้ยินเสียงอะไร</span>
      </p>

      <Link to="/questions" className="z-50 p-2">
        <PrimaryButton text="Try Again" />
      </Link>
    </div>
  )
}
