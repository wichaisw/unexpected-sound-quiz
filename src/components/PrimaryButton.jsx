import React from 'react';

export default function PrimaryButton(props) {

  const onClickNext = () => {
    props.renderNextQuestion();
    props.setCounter((prev) => prev + 1);
  }

  return (
    <button onClick={() => onClickNext()} className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white font-bold py-2 px-4 rounded">
      <span>{props.text}</span>
    </button>
  )
}
