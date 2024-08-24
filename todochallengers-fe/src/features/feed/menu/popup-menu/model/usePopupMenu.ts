import { useState, useRef, useEffect } from 'react';

const usePopupMenu = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsVisible((prev) => !prev);
  };

  const closeMenu = () => {
    setIsVisible(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
      closeMenu();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return {
    isVisible,
    toggleMenu,
    closeMenu,
    containerRef,
  };
};

export default usePopupMenu;
