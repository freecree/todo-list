import { FC } from 'react';
import Header from './components/header/header';
import TaskBoard from './components/task-board/task-board';

const App: FC = () => {
  return (
    <>
      <Header />
      <TaskBoard />
    </>
  );
};

export default App;
