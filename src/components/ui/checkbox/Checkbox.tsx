import './checkbox.scss';
import { FC } from 'react';

interface CheckboxProps {
  isChecked: boolean;
}

const Checkbox: FC<CheckboxProps> = ({ isChecked }) => {
  return (
    <label className='checkbox-wrapper'>
      <input checked={isChecked} type='checkbox' readOnly />
      <span
        onClick={(event) => {
          event.stopPropagation();
        }}
        className='checkmark'
      ></span>
    </label>
  );
};

export default Checkbox;
