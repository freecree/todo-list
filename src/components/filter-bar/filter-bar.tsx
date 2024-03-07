import { FC } from 'react';
import './filter-bar.scss';
import { TaskFilterOptions } from '../../consts';

interface FilterBarProps {
  selectedFilter: TaskFilterOptions;
  onFilterChange: (filter: TaskFilterOptions) => void;
}

const FilterBar: FC<FilterBarProps> = ({ selectedFilter, onFilterChange }) => {
  const handleFilterChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    onFilterChange(event.target.value as TaskFilterOptions);
  };
  return (
    <div className='filter-bar'>
      <input
        type='radio'
        name='all'
        value={TaskFilterOptions.All}
        id='all'
        checked={selectedFilter === TaskFilterOptions.All}
        onChange={handleFilterChange}
      />
      <label htmlFor='all' className='input-label'>
        All
      </label>

      <input
        type='radio'
        name='completed'
        value={TaskFilterOptions.Completed}
        id='completed'
        checked={selectedFilter === TaskFilterOptions.Completed}
        onChange={handleFilterChange}
      />
      <label htmlFor='completed' className='input-label'>
        Completed
      </label>

      <input
        type='radio'
        name='current'
        value={TaskFilterOptions.Current}
        id='current'
        checked={selectedFilter === TaskFilterOptions.Current}
        onChange={handleFilterChange}
      />
      <label htmlFor='current' className='input-label'>
        Current
      </label>
    </div>
  );
};

export default FilterBar;
