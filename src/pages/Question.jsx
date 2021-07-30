import React, { useState, useEffect, useCallback } from 'react';
import ReactPlayer from 'react-player'
import ReactAudioPlayer from 'react-audio-player';
import { questionList } from '../shared/questions.js';
import ChoiceButton from '../components/ChoiceButton';
import PrimaryButton from '../components/PrimaryButton';

export default function Question() {
  const [ isAnswered, setIsAnswered ] = useState();
  const [ currentQuestion, setCurrentQuestion ] = useState({value: 0});

  useEffect(() => {

  }, [])

  const onChoiceSelected = () => {
    console.log('clicked');
    setIsAnswered(true);

    console.log(isAnswered );
  }

  return (
    <div className="flex flex-col w-full min-h-screen items-center justify-center">
      <h1>Question</h1>

      {
        isAnswered
        ? <ReactPlayer url={questionList[0].videoUrl} />
        : <ReactAudioPlayer
            src={questionList[0].audioUrl}
            autoPlay
            controls
          />
      }

      <div className="flex space-x-2 p-4">
        {questionList[0].choices.map((value, index) => {
            return (<ChoiceButton setIsAnswered={setIsAnswered} text={value} key={`${questionList[currentQuestion]}-${index}`} />)      
          })
        }
      </div>

      {
        isAnswered ? <PrimaryButton text="Next" /> : null
      }
    </div>
  )
}
