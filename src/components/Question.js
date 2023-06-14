import React, { useContext } from "react";
import Answer from "./Answer";
import { QuizContext } from "../contexts/quiz";

const Question = ({ questions }) => {
  const [quizState, dispatch] = useContext(QuizContext);
  console.log("questions", quizState);
  const currentquestion = quizState.questions[quizState.currentQuestionIndex];
  return (
    <>
      <div className="question">{currentquestion.question}</div>
      <div className="answers">
        {quizState.answers.map((answer, index) => (
          <Answer
            answerText={answer}
            key={index}
            index = {index}
            currentAnswer={quizState.currentAnswer}
            correctAnswer = {currentquestion.correctAnswer}
            onSelectAnswer={(answerText) => dispatch({ type: "SELECT_ANSWER",payload:answerText })}
          />
        ))}
      </div>
    </>
  );
};

export default Question;
