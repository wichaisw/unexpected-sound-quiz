import React, { useState, useEffect } from 'react'

export default function ChoiceButton(props) {
  const [ isSelectedChoice, setIsSelectedChoice ] = useState(false);
  const [ isCorrectAnswer, setIsCorrectAnswer ] = useState(false);

  useEffect(() => {
    if(!props.isAnswered) {
      setIsCorrectAnswer(false);
    }

    if(props.isAnswered && props.answer === props.index) {
      setIsCorrectAnswer(true);
    }
  }, [props.isAnswered])

  const onChoiceSelected = () => {
    setIsSelectedChoice(true);
    props.setIsAnswered(true);
  }

  return (
    <button onClick={() => onChoiceSelected()} className={`${isCorrectAnswer ? 'bg-yellow-600' : 'bg-yellow-400'} hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded`}>
    
      <span>{props.text}</span>
    </button>
  )
}
