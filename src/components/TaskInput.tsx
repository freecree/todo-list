import { useState } from 'react';
import Input from './ui/input/Input';

interface TaskInputProps {
  onAddTask: (value: string) => void;
}

function TaskInput({ onAddTask }: TaskInputProps) {
  const [taskValue, setTaskValue] = useState('');

  function handleTaskSubmit() {
    onAddTask(taskValue);
    setTaskValue('');
  }

  return (
    <>
      <Input
        value={taskValue}
        onChange={setTaskValue}
        onSubmit={handleTaskSubmit}
      />
    </>
  );
}

export default TaskInput;
