import { useState } from 'react';
import { simulateWorkflow } from '../api/simulation';
import { WorkflowNode } from '../types/nodes';

const useSimulation = () => {
    const [executionLog, setExecutionLog] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const runSimulation = async (workflow: WorkflowNode[]) => {
        setIsLoading(true);
        setExecutionLog([]);
        setError(null);

        try {
            const result = await simulateWorkflow(workflow);
            setExecutionLog(result);
        } catch (err) {
            setError('Simulation failed. Please check the workflow configuration.');
        } finally {
            setIsLoading(false);
        }
    };

    return {
        executionLog,
        isLoading,
        error,
        runSimulation,
    };
};

export default useSimulation;