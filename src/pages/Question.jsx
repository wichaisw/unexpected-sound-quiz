import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player'
import ReactAudioPlayer from 'react-audio-player';
import { questionList } from '../shared/questions.js';
import ChoiceButton from '../components/ChoiceButton';
import PrimaryButton from '../components/PrimaryButton';
import { useHistory } from "react-router-dom";

export default function Question() {
  let history = useHistory();

  const [ isAnswered, setIsAnswered ] = useState();
  const [ currentQuestion, setCurrentQuestion ] = useState(0);
  // const [ isVideoLoading, setIsVideoLoading ] = useState();
  const [ counter, setCounter] = useState(1);
  const [ score, setScore ] = useState(0);
  const [ userAnswer, setUserAnswer] = useState(null);

  useEffect(() => {
    setCurrentQuestion(0);
    randomQuestion();
    localStorage.setItem("UNEXPECTED_SOUND_SCORE", 0)
  }, [])

  useEffect(() => {
    if(counter > 5) {
      history.push("/result");
      localStorage.setItem("UNEXPECTED_SOUND_SCORE", score)
    }
  }, [counter])

  useEffect(() => {
    if(isAnswered && userAnswer === questionList[currentQuestion].answer) {
      setScore(prev => prev + 1);
    }
  }, [isAnswered])
  
  const renderNextQuestion = () => {
    questionList.splice(currentQuestion, 1);
    setIsAnswered(false);
    randomQuestion();
  }

  const onAnswered = () => {
    setIsAnswered(true);
  }

  const randomQuestion = () => {
    setCurrentQuestion(Math.floor(Math.random() * questionList.length));
  }



  return (
    <div className="flex flex-col w-full min-h-screen bg-black">
      <div className="text-yellow-500 flex w-3/5 w-full font-bold text-2xl justify-between mt-16 px-5">
        <span>{counter}/5</span>
        <span>Score: {score}</span>
      </div>

      <div className="flex flex-col items-center justify-center m-auto">
        {
          isAnswered
          ? (
            <>
              <ReactPlayer
                url={questionList[currentQuestion]?.videoUrl} 
                // onBuffer={() => setIsVideoLoading(true)} 
              />
              {/* isVideoLoading ? <span className="text-white">...Loading</span> : null */}
            </>
          )
          
          : <ReactAudioPlayer
              src={questionList[currentQuestion]?.audioUrl}
              autoPlay
              controls
            />
        }

        <div className="flex space-x-2 p-4">
          {questionList[currentQuestion].choices.map((value, index) => {
              return (<ChoiceButton 
                answer={questionList[currentQuestion].answer}
                index={index} 
                isAnswered={isAnswered}
                // setIsAnswered={setIsAnswered} 
                userAnswer={userAnswer}
                setUserAnswer={setUserAnswer}
                onAnswered={onAnswered}
                setScore={setScore}
                text={value} 
                key={`${questionList[currentQuestion]}-${index}`} 
              />)      
            })
          }
        </div>

        {
          isAnswered ? <PrimaryButton 
              setCounter={setCounter} 
              renderNextQuestion={renderNextQuestion} 
              text={counter === 5 ? 'View Result' : 'Next'} 
            /> : null
        }
        
      </div>
    </div>
  )
}
