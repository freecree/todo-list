import './checkbox.scss';

interface CheckboxProps {
  isChecked: boolean;
}

function Checkbox({ isChecked }: CheckboxProps) {
  return (
    <label className='checkbox-wrapper'>
      <input checked={isChecked} type='checkbox' />
      <span
        onClick={(e) => {
          e.stopPropagation();
        }}
        className='checkmark'
      ></span>
    </label>
  );
}

export default Checkbox;
