import './input.scss';
import { FC, KeyboardEvent } from 'react';

interface InputProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: (value: string) => void;
}

const Input: FC<InputProps> = ({ value, onChange, onSubmit }) => {
  const isValid = (): boolean => {
    return value.trim().length > 0;
  };
  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === 'Enter' && isValid()) {
      onSubmit(value.trim());
    }
  };
  return (
    <input
      value={value}
      onChange={(event) => onChange(event.target.value)}
      onKeyDown={handleKeyPress}
      className='input'
      type='text'
    />
  );
};
export default Input;
