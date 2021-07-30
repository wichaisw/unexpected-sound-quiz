import React from 'react';

export default function PrimaryButton(props) {
  return (
    <button className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white font-bold py-2 px-4 rounded">
      <span>{props.text}</span>
    </button>
  )
}
