import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player'
import ReactAudioPlayer from 'react-audio-player';
import { questionList } from '../shared/questions.js';
import ChoiceButton from '../components/ChoiceButton';
import NextButton from '../components/NextButton';
import { useHistory } from "react-router-dom";

export default function Question() {
  let history = useHistory();
  let clonedQuestionList = {...questionList};

  const [ isAnswered, setIsAnswered ] = useState(false);
  const [ currentQuestion, setCurrentQuestion ] = useState(0);
  const [ currentQuestionLength, setCurrentQuestionLength ] = useState(Math.floor(Math.random() * questionList.length));
  const [ counter, setCounter] = useState(1);
  const [ score, setScore ] = useState(0);
  const [ userAnswer, setUserAnswer] = useState(null);

  useEffect(() => {
    clonedQuestionList = {...questionList}

    setCounter(1);
    // setCurrentQuestion(0);
    setCurrentQuestionLength(questionList.length)
    randomQuestion();
    console.log(currentQuestion);
    localStorage.setItem("UNEXPECTED_SOUND_SCORE", 0)
  }, [])

  useEffect(() => {
    if(counter > 5) {
      history.push("/result");
      localStorage.setItem("UNEXPECTED_SOUND_SCORE", score)
    }
  }, [counter])

  useEffect(() => {
    if(isAnswered && userAnswer === clonedQuestionList[currentQuestion].answer) {
      setScore(prev => prev + 1);
    }
  }, [isAnswered])
  
  function renderNextQuestion() {
    // clonedQuestionList.splice(currentQuestion, 1);
    clonedQuestionList[currentQuestion].isSeen = false;

    setCurrentQuestionLength(prev => prev -1)
    setIsAnswered(false);

    if(counter <= 5) {
      randomQuestion();
    }
  }

  function onAnswered() {
    setIsAnswered(true);
  }

  function randomQuestion() {
    let nextIndex = Math.floor(Math.random() * currentQuestionLength);
    while(clonedQuestionList[nextIndex].isSeen) {
      nextIndex = Math.floor(Math.random() * currentQuestionLength);
    }
    setCurrentQuestion(nextIndex);
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
                playing={true}
              />
            </>
          )
          
          : <ReactAudioPlayer
              src={questionList[currentQuestion]?.audioUrl}
              autoPlay
              controls
            />
        }

        <div className="flex space-x-2 p-4">
          {questionList[currentQuestion]?.choices.map((value, index) => {
              return (<ChoiceButton 
                answer={questionList[currentQuestion].answer}
                index={index} 
                isAnswered={isAnswered}
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
          isAnswered ?
            <NextButton 
              setCounter={setCounter} 
              renderNextQuestion={renderNextQuestion} 
              text={counter === 5 ? 'View Result' : 'Next'} 
            /> : null
        }
        
      </div>
    </div>
  )
}
