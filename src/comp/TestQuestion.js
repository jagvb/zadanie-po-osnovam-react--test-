import React, { useState } from 'react';
import TestQuestion from './mas';

const Test = () => {
  const questions = [
    { question: '5 умножить на 2', answer: '10' },
    { question: 'Cтолица России?', answer: 'Москва' },
    { question: '6 поделить на 12', answer: '0.5' },
  ];

  const [results, setResults] = useState([]);

  const handleQuestionSubmit = (userAnswer) => {
    setResults([...results, userAnswer]);
  };

  return (
    <div>
      {questions.map((q, index) => (
        <TestQuestion
          key={index}
          question={q.question}
          onSubmit={(userAnswer) => handleQuestionSubmit(userAnswer, index)}
          answer={q.answer}
        />
      ))}
      
    </div>
  );
};

export default Test;
