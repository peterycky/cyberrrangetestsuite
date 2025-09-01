import React, { useState } from 'react';
import { Badge } from './Badge';
import { AlertCircleIcon, CheckCircleIcon, ZapIcon, ChevronDownIcon, ChevronRightIcon, CodeIcon } from 'lucide-react';
interface Task {
  id: string;
  title: string;
  description: string;
  difficulty: number;
  completed: boolean;
  instructions?: string[];
}
interface TaskListProps {
  completedTasks: string[];
}
export const TaskList: React.FC<TaskListProps> = ({
  completedTasks
}) => {
  const [selectedTaskId, setSelectedTaskId] = useState<string | null>(null);
  const tasks: Task[] = [{
    id: 'task1',
    title: 'SYSTEM INITIALIZATION',
    description: 'Boot up the main system and initialize all core modules.',
    difficulty: 1,
    completed: completedTasks.includes('task1'),
    instructions: ['Run the "init" command in the terminal', 'Wait for all core modules to load completely', 'Check system status indicators for successful initialization']
  }, {
    id: 'task2',
    title: 'NETWORK INFILTRATION',
    description: 'Access the secure network using provided credentials.',
    difficulty: 2,
    completed: completedTasks.includes('task2'),
    instructions: ['Execute the "connect" command in the terminal', 'Wait for secure connection to be established', 'Verify network access permissions']
  }, {
    id: 'task3',
    title: 'DATA EXTRACTION',
    description: 'Retrieve encrypted files from the main database.',
    difficulty: 3,
    completed: completedTasks.includes('task3'),
    instructions: ['Run the "extract" command in the terminal', 'Monitor extraction progress until completion', 'Confirm all files have been retrieved successfully']
  }, {
    id: 'task4',
    title: 'FIREWALL BYPASS',
    description: 'Bypass security protocols to gain admin access.',
    difficulty: 4,
    completed: completedTasks.includes('task4'),
    instructions: ['Execute the "bypass" command in the terminal', 'Wait for firewall analysis to complete', 'Confirm admin access has been granted']
  }, {
    id: 'task5',
    title: 'QUANTUM DECRYPTION',
    description: 'Decrypt the retrieved files using the quantum algorithm.',
    difficulty: 5,
    completed: completedTasks.includes('task5'),
    instructions: ['Run the "decrypt" command in the terminal', 'Monitor quantum decryption progress', 'Verify files are accessible after decryption']
  }, {
    id: 'task6',
    title: 'SYSTEM HARDENING',
    description: 'Implement additional security measures to protect the system.',
    difficulty: 3,
    completed: true,
    instructions: ['Patched kernel vulnerabilities', 'Implemented quantum-resistant encryption', 'Deployed neural firewall with adaptive learning']
  }];
  const handleTaskClick = (taskId: string) => {
    if (selectedTaskId === taskId) {
      setSelectedTaskId(null); // Collapse if already selected
    } else {
      setSelectedTaskId(taskId); // Expand the clicked task
    }
  };
  return <div className="bg-[#0c0c20]/80 border border-cyan-500/30 rounded-md overflow-hidden">
      <div className="bg-[#0c0c20] p-3 border-b border-cyan-500/30 flex items-center justify-between">
        <h2 className="text-lg font-bold text-cyan-300 uppercase tracking-wide">
          Active Tasks
        </h2>
        <div className="flex items-center gap-2">
          <span className="text-xs text-yellow-400 font-bold">
            {completedTasks.length + 1}/{tasks.length} COMPLETED
          </span>
        </div>
      </div>
      <div className="p-2">
        {tasks.map(task => {
        const isSelected = selectedTaskId === task.id;
        return <div key={task.id} className={`mb-3 p-3 border ${task.completed ? 'border-green-500/50 bg-green-900/10' : isSelected ? 'border-yellow-500/50 bg-yellow-900/10' : 'border-cyan-500/30 bg-[#131342]/50'} rounded-md relative overflow-hidden group cursor-pointer transition-all duration-200`} onClick={() => handleTaskClick(task.id)}>
              <div className={`absolute left-0 top-0 h-full w-1 ${task.completed ? 'bg-green-500' : isSelected ? 'bg-yellow-500' : 'bg-cyan-500'}`}></div>
              {/* Yellow highlight for priority tasks */}
              {task.difficulty >= 4 && !task.completed && <div className="absolute right-0 top-0 h-full w-1 bg-yellow-500"></div>}
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    {task.completed ? <CheckCircleIcon size={18} className="text-green-400" /> : task.difficulty >= 4 ? <ZapIcon size={18} className="text-yellow-400" /> : <AlertCircleIcon size={18} className="text-cyan-400" />}
                    <h3 className="font-bold text-sm flex items-center gap-2">
                      {task.title}
                      {task.difficulty >= 4 && !task.completed && <span className="ml-2 text-xs text-yellow-400">
                          HIGH PRIORITY
                        </span>}
                      {isSelected ? <ChevronDownIcon size={16} className="text-yellow-400" /> : <ChevronRightIcon size={16} className="text-gray-500" />}
                    </h3>
                  </div>
                  <p className="text-xs text-gray-400 mt-1 ml-6">
                    {task.description}
                  </p>
                </div>
                <div className="flex flex-col items-end">
                  <div className="flex gap-1">
                    {[...Array(task.difficulty)].map((_, i) => <div key={i} className={`w-2 h-2 rounded-sm ${task.difficulty >= 4 ? 'bg-yellow-500/70' : 'bg-pink-500/70'}`}></div>)}
                    {[...Array(5 - task.difficulty)].map((_, i) => <div key={i} className="w-2 h-2 bg-gray-700 rounded-sm"></div>)}
                  </div>
                  {task.completed && <Badge />}
                </div>
              </div>
              {/* Expanded task details */}
              {isSelected && <div className="mt-4 ml-6 p-3 bg-[#0a0a20]/60 border border-yellow-500/30 rounded">
                  <div className="flex items-center mb-2">
                    <CodeIcon size={14} className="text-yellow-400 mr-2" />
                    <span className="text-xs uppercase tracking-wider text-yellow-400">
                      Instructions
                    </span>
                  </div>
                  <ul className="list-disc pl-5 text-xs text-gray-300 space-y-2">
                    {task.instructions?.map((instruction, idx) => <li key={idx} className="text-gray-300">
                        {instruction}
                      </li>)}
                  </ul>
                  {task.completed ? <div className="mt-3 flex items-center bg-green-900/20 p-2 rounded border border-green-500/30">
                      <CheckCircleIcon size={14} className="text-green-400 mr-2" />
                      <span className="text-xs text-green-400">
                        Task completed successfully
                      </span>
                    </div> : <div className="mt-3 flex items-center bg-yellow-900/20 p-2 rounded border border-yellow-500/30">
                      <AlertCircleIcon size={14} className="text-yellow-400 mr-2" />
                      <span className="text-xs text-yellow-400">
                        Task pending completion
                      </span>
                    </div>}
                </div>}
              {/* Task completed indicator (only when not expanded) */}
              {task.completed && !isSelected && <div className="mt-2 ml-6 text-xs text-green-400">
                  Task completed successfully
                </div>}
            </div>;
      })}
      </div>
    </div>;
};