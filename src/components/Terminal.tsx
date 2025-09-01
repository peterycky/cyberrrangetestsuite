import React, { useEffect, useState, useRef } from 'react';
import { TerminalIcon, ChevronRightIcon } from 'lucide-react';
interface TerminalProps {
  onCommandExecute: (taskId: string) => void;
}
interface CommandHistory {
  command: string;
  output: string;
  isError?: boolean;
  isWarning?: boolean;
  isSuccess?: boolean;
}
export const Terminal: React.FC<TerminalProps> = ({
  onCommandExecute
}) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<CommandHistory[]>([{
    command: '',
    output: 'CyberNET Terminal v3.7.1\n> Type "help" for available commands.',
    isWarning: true
  }]);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);
  const commands: Record<string, {
    description: string;
    action: () => string;
    taskId?: string;
    isWarning?: boolean;
    isSuccess?: boolean;
  }> = {
    help: {
      description: 'Display available commands',
      action: () => {
        return Object.entries(commands).map(([cmd, {
          description
        }]) => `${cmd.padEnd(15)} - ${description}`).join('\n');
      },
      isWarning: true
    },
    clear: {
      description: 'Clear terminal history',
      action: () => {
        setTimeout(() => setHistory([]), 0);
        return 'Terminal cleared.';
      }
    },
    init: {
      description: 'Initialize system',
      action: () => {
        return 'System initialization sequence started...\n' + 'Loading core modules: [████████████] 100%\n' + 'System successfully initialized.';
      },
      taskId: 'task1',
      isSuccess: true
    },
    connect: {
      description: 'Connect to network',
      action: () => {
        return 'Establishing secure connection...\n' + 'Access granted. Network infiltration successful.';
      },
      taskId: 'task2',
      isSuccess: true
    },
    extract: {
      description: 'Extract data from database',
      action: () => {
        return 'Extracting encrypted files...\n' + 'Progress: [████████████] 100%\n' + 'Data extraction complete.';
      },
      taskId: 'task3',
      isWarning: true
    },
    bypass: {
      description: 'Bypass security firewall',
      action: () => {
        return 'Analyzing firewall structure...\n' + 'Exploiting vulnerability...\n' + 'Admin access granted. Firewall successfully bypassed.';
      },
      taskId: 'task4',
      isWarning: true
    },
    decrypt: {
      description: 'Decrypt files using quantum algorithm',
      action: () => {
        return 'Initializing quantum decryption sequence...\n' + 'Computing prime factors: [████████████] 100%\n' + 'Decryption successful. Files are now accessible.';
      },
      taskId: 'task5',
      isSuccess: true
    }
  };
  const executeCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    if (trimmedCmd === '') {
      return;
    }
    let output: string;
    let isError = false;
    let isWarning = false;
    let isSuccess = false;
    const commandObj = commands[trimmedCmd];
    if (commandObj) {
      output = commandObj.action();
      if (commandObj.taskId) {
        onCommandExecute(commandObj.taskId);
      }
      isWarning = commandObj.isWarning || false;
      isSuccess = commandObj.isSuccess || false;
    } else {
      output = `Command not recognized: ${trimmedCmd}`;
      isError = true;
    }
    setHistory([...history, {
      command: cmd,
      output,
      isError,
      isWarning,
      isSuccess
    }]);
    setInput('');
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      executeCommand(input);
    }
  };
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);
  useEffect(() => {
    // Auto-focus the terminal input when component mounts
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);
  return <div className="flex flex-col h-full">
      <div className="bg-[#0c0c20] p-3 border-b border-cyan-500/30 flex items-center">
        <TerminalIcon size={18} className="text-cyan-400 mr-2" />
        <h2 className="text-lg font-bold text-cyan-300 uppercase tracking-wide">
          Terminal
        </h2>
        <div className="ml-auto px-2 py-1 bg-yellow-500/20 rounded text-xs text-yellow-400">
          SECURE CONNECTION
        </div>
      </div>
      <div ref={terminalRef} className="flex-grow bg-[#0c0c20]/90 border border-cyan-500/30 font-mono text-sm overflow-auto p-3" onClick={() => inputRef.current?.focus()}>
        {history.map((item, index) => <div key={index} className="mb-2">
            {item.command && <div className="flex items-center text-cyan-400">
                <ChevronRightIcon size={16} className="mr-1" />
                <span>{item.command}</span>
              </div>}
            <div className={`ml-5 whitespace-pre-wrap ${item.isError ? 'text-red-400' : item.isWarning ? 'text-yellow-300' : item.isSuccess ? 'text-green-300' : 'text-gray-300'}`}>
              {item.output}
            </div>
          </div>)}
        <div className="flex items-center text-cyan-400 mt-1">
          <ChevronRightIcon size={16} className="mr-1" />
          <input ref={inputRef} type="text" value={input} onChange={e => setInput(e.target.value)} onKeyDown={handleKeyDown} className="flex-grow bg-transparent outline-none text-cyan-300 caret-yellow-400" spellCheck="false" autoComplete="off" />
        </div>
      </div>
      <div className="bg-[#0c0c20]/70 border border-t-0 border-cyan-500/30 p-2 text-xs text-yellow-400 flex items-center justify-between">
        <span>Type "help" to see available commands</span>
        <span className="px-1.5 py-0.5 bg-yellow-500/20 rounded text-yellow-300 text-[10px] uppercase">
          System Active
        </span>
      </div>
    </div>;
};