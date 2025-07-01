import { useEffect, useState } from "react";

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

const DecryptedText = ({ text, className = "", trigger = false }) => {
  const [displayed, setDisplayed] = useState(text);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    if (trigger) {
      let frame = 0;
      const id = setInterval(() => {
        let output = text
          .split("")
          .map((char, i) => {
            if (i < frame) return char;
            return characters[Math.floor(Math.random() * characters.length)];
          })
          .join("");

        setDisplayed(output);
        frame++;
        if (frame > text.length) clearInterval(id);
      }, 40);

      setIntervalId(id);
    } else {
      clearInterval(intervalId);
      setDisplayed(text);
    }

    return () => clearInterval(intervalId);
  }, [trigger, text]);

  return <h3 className={`transition-all ${className}`}>{displayed}</h3>;
};

export default DecryptedText;
