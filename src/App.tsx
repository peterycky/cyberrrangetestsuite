import React, { useState } from 'react';
import { Header } from './components/Header';
import { TaskList } from './components/TaskList';
import { Terminal } from './components/Terminal';
export function App() {
  const [completedTasks, setCompletedTasks] = useState<string[]>([]);
  const handleTaskCompletion = (taskId: string) => {
    if (!completedTasks.includes(taskId)) {
      setCompletedTasks([...completedTasks, taskId]);
    }
  };
  return <div className="flex flex-col w-full min-h-screen bg-gradient-to-br from-[#1a1a3a] to-[#0f0f2d] text-cyan-300 font-mono overflow-hidden relative">
      {/* Yellow accent elements in background */}
      <div className="absolute top-[15%] right-[10%] w-24 h-24 rounded-full bg-yellow-500/5 blur-xl pointer-events-none"></div>
      <div className="absolute bottom-[20%] left-[5%] w-32 h-32 rounded-full bg-yellow-400/10 blur-xl pointer-events-none"></div>
      <Header level={17} reputation={25} />
      <main className="flex flex-col md:flex-row w-full flex-grow p-4 gap-4 overflow-auto">
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <TaskList completedTasks={completedTasks} />
        </div>
        <div className="w-full md:w-1/2 flex flex-col">
          <Terminal onCommandExecute={handleTaskCompletion} />
        </div>
      </main>
    </div>;
}