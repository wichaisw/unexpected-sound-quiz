import React, { useState, useEffect, useCallback } from 'react';
import ReactPlayer from 'react-player'
import ReactAudioPlayer from 'react-audio-player';
import { questionList } from '../shared/questions.js';
import ChoiceButton from '../components/ChoiceButton';
import PrimaryButton from '../components/PrimaryButton';

export default function Question() {
  const [ isAnswered, setIsAnswered ] = useState();
  const [ currentQuestion, setCurrentQuestion ] = useState(0);
  const [ isVideoLoading, setIsVideoLoading ] = useState();

  useEffect(() => {
    setCurrentQuestion(0);
    randomQuestion();
  }, [])
  
  const renderNextQuestion = () => {
    setIsAnswered(false);
    randomQuestion();
  }

  const randomQuestion = () => {
    setCurrentQuestion(Math.floor(Math.random() * questionList.length));
  }

  return (
    <div className="flex flex-col w-full min-h-screen items-center justify-center bg-black">
      <h1>Question</h1>

      {
        isAnswered
        ? (
          <>
            <ReactPlayer
              url={questionList[currentQuestion].videoUrl} 
              // onBuffer={() => setIsVideoLoading(true)} 
            />
            {/* isVideoLoading ? <span className="text-white">...Loading</span> : null */}
          </>
        )
        
        : <ReactAudioPlayer
            src={questionList[currentQuestion].audioUrl}
            autoPlay
            controls
          />
      }

      <div className="flex space-x-2 p-4">
        {questionList[0].choices.map((value, index) => {
            return (<ChoiceButton 
              answer={questionList[currentQuestion].answer} 
              index={index} 
              isAnswered={isAnswered}
              setIsAnswered={setIsAnswered} 
              text={value} 
              key={`${questionList[currentQuestion]}-${index}`} 
            />)      
          })
        }
      </div>

      {
        isAnswered ? <PrimaryButton renderNextQuestion={renderNextQuestion} text="Next" /> : null
      }
    </div>
  )
}
