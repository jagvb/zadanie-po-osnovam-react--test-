import {React, useState} from 'react';

const TestQuestion = ({ question, onSubmit, answer }) => {
  const [userAnswer, setUserAnswer] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (event) => {
    setUserAnswer(event.target.value);
  };

  const handleSubmit = () => {
    setSubmitted(true);
    onSubmit(userAnswer);
  };

  return (
    <div>
      <p>{question}</p>
      {!submitted ? (
        <div>
        <input
          type="text"
          placeholder="Введите ответ..."
          value={userAnswer}
          onChange={handleInputChange}
        />
        <button onClick={handleSubmit}>Сдать тест</button>
        </div>
      ) : answer==userAnswer ? (
        <p style={{ color: 'green' }}>
            ваш ответ такой-то ({userAnswer}), правильно
        </p>
      ) : (
        <p style={{ color: 'red' }}>
            ваш ответ такой-то({userAnswer}), не правильно, правильный ответ такой-то({answer})
        </p>
      )
    }
    {
         
    }
    </div>
  );
};

export default TestQuestion