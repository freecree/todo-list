import './input.scss';
import { KeyboardEvent } from 'react';

interface InputProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: (value: string) => void;
}

function Input({ value, onChange, onSubmit }: InputProps) {
  function isValid() {
    return value.trim().length > 0;
  }
  function handleKeyPress(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter' && isValid()) {
      onSubmit(value.trim());
    }
  }
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onKeyDown={handleKeyPress}
      className='input'
      type='text'
    />
  );
}
export default Input;
