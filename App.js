import React, { useState } from 'react';

const App = () => {
  const [userAnswer, setUserAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);
  
  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);
    return { num1, num2, answer: num1 + num2 };
  };

  const [captcha, setCaptcha] = useState(generateCaptcha());

  const handleSubmit = (e) => {
    e.preventDefault();
    const answer = parseInt(userAnswer, 10);
    if (answer === captcha.answer) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
    setUserAnswer('');
    setCaptcha(generateCaptcha());
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>CAPTCHA Simples</h1>
      <form onSubmit={handleSubmit}>
        <p>Qual é {captcha.num1} + {captcha.num2}?</p>
        <input
          type="number"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          required
        />
        <button type="submit">Enviar</button>
      </form>
      {isCorrect !== null && (
        <p>{isCorrect ? 'Resposta correta!' : 'Resposta incorreta, tente novamente.'}</p>
      )}
    </div>
  );
};

export default App;
