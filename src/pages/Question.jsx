import React from 'react';
import { Player } from 'video-react';

export default function Question() {
  return (
    <div className="flex flex-col w-full min-h-screen items-center justify-center">
      <h1>Question</h1>
      <Player
        playsInline
        src="https://vimeo.com/manage/videos/581340670"
      />
    </div>
  )
}
