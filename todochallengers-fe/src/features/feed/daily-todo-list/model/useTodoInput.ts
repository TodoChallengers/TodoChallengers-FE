import { useState, useEffect, useRef } from 'react';
import useInput from '@/shared/hooks/useInput';

const useTodoInput = () => {
  const { value, onChange, reset } = useInput('');  // useInput 훅 사용
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isAddingTodo, setIsAddingTodo] = useState(false);

  const toggleAddingTodo = () => {
    setIsAddingTodo((prev) => !prev);
  };

  // 외부 클릭 감지
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node) &&
        isAddingTodo
      ) {
        toggleAddingTodo();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isAddingTodo]);

  // 입력 필드에 포커스 설정
  useEffect(() => {
    if (isAddingTodo) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 0);
    }
  }, [isAddingTodo]);

  return {
    value,
    onChange,
    reset,
    inputRef,
    containerRef,
    isAddingTodo,
    toggleAddingTodo,
  };
};

export default useTodoInput;
