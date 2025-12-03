import React, { useState } from 'react';
import { useSimulation } from '../../hooks/useSimulation';
import { Workflow } from '../../types/workflow';

const TestPanel: React.FC<{ workflow: Workflow }> = ({ workflow }) => {
    const [executionLog, setExecutionLog] = useState<string[]>([]);
    const { simulateWorkflow } = useSimulation();

    const handleSimulate = async () => {
        setExecutionLog([]);
        const log = await simulateWorkflow(workflow);
        setExecutionLog(log);
    };

    return (
        <div className="test-panel">
            <h2>Workflow Test Panel</h2>
            <button onClick={handleSimulate}>Simulate Workflow</button>
            <div className="execution-log">
                <h3>Execution Log</h3>
                <ul>
                    {executionLog.map((log, index) => (
                        <li key={index}>{log}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default TestPanel;