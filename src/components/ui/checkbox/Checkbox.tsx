import './checkbox.scss';

interface CheckboxProps {
  isChecked: boolean;
  onChange?: () => void;
}

function Checkbox({ isChecked, onChange }: CheckboxProps) {
  const handleChange = () => {
    if (onChange) {
      onChange();
    }
  };

  return (
    <label className='checkbox-wrapper'>
      <input checked={isChecked} onChange={handleChange} type='checkbox' />
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
