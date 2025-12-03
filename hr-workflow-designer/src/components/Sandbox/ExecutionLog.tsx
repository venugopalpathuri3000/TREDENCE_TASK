import React from 'react';

interface ExecutionLogProps {
    logs: string[];
}

const ExecutionLog: React.FC<ExecutionLogProps> = ({ logs }) => {
    return (
        <div className="execution-log">
            <h3>Execution Log</h3>
            <ul>
                {logs.map((log, index) => (
                    <li key={index}>{log}</li>
                ))}
            </ul>
        </div>
    );
};

export default ExecutionLog;