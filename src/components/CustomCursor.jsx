// src/components/CustomCursor.jsx
import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const updateCursor = e => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Check if hovered element needs pointer
      const target = e.target;
      const tag = target.tagName?.toLowerCase();
      const pointerTags = ['a', 'button', 'input', 'textarea', 'select', 'label'];
      const pointerCursor =
        target.getAttribute('data-cursor') === 'pointer' ||
        pointerTags.includes(tag) ||
        getComputedStyle(target).cursor === 'pointer';

      setIsPointer(pointerCursor);
    };

    const updateTheme = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };

    window.addEventListener('mousemove', updateCursor);
    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    updateTheme(); // initial check

    return () => {
      window.removeEventListener('mousemove', updateCursor);
      observer.disconnect();
    };
  }, []);

  const defaultCursor = isDark ? '/dark-cursor-default.svg' : '/light-cursor-default.svg';
  const pointerCursor = isDark ? '/dark-cursor-pointer.svg' : '/light-cursor-pointer.svg';

  return (
    <>
      <img
        src={defaultCursor}
        alt="cursor"
        className="fixed z-[9999] pointer-events-none transition-transform duration-75"
        style={{
          left: position.x,
          top: position.y,
          transform: 'translate(-50%, -50%)',
          width: '24px',
          height: '24px',
          opacity: isPointer ? 0 : 1,
        }}
      />
      <img
        src={pointerCursor}
        alt="pointer"
        className="fixed z-[9999] pointer-events-none transition-transform duration-75"
        style={{
          left: position.x,
          top: position.y,
          transform: 'translate(-50%, -50%)',
          width: '24px',
          height: '24px',
          opacity: isPointer ? 1 : 0,
        }}
      />
    </>
  );
};

export default CustomCursor;
