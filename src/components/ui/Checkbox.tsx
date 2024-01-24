import './checkbox.css';

interface CheckboxProps {
  isChecked: boolean;
  onChange: () => void;
}

function Checkbox({ isChecked, onChange }: CheckboxProps) {
  return (
    <label className='checkbox-wrapper' onClick={(e) => e.stopPropagation()}>
      <input checked={isChecked} onChange={onChange} type='checkbox' />
      <span className='checkmark'></span>
    </label>
  );
}

export default Checkbox;
