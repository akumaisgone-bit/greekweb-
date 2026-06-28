import { useState, useEffect } from 'react';

export const useTypewriter = (text: string, speed = 38, startDelay = 600) => {
  const [prevKey, setPrevKey] = useState({ text, speed, startDelay });
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);

  if (text !== prevKey.text || speed !== prevKey.speed || startDelay !== prevKey.startDelay) {
    setPrevKey({ text, speed, startDelay });
    setDisplayed('');
    setDone(false);
  }

  useEffect(() => {
    let index = 0;
    let timerId: ReturnType<typeof setTimeout> | undefined;

    const tick = () => {
      if (index < text.length) {
        setDisplayed(text.slice(0, index + 1));
        index++;
        timerId = setTimeout(tick, speed);
      } else {
        setDone(true);
      }
    };

    const startTimer = setTimeout(tick, startDelay);

    return () => {
      clearTimeout(startTimer);
      if (timerId) clearTimeout(timerId);
    };
  }, [text, speed, startDelay]);

  return { displayed, done };
};
