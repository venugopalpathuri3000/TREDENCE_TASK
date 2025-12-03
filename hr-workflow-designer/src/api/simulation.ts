import { WorkflowNode } from '../types/nodes';

const simulateWorkflow = async (workflow: WorkflowNode[]) => {
    // Simulate the execution of the workflow
    const executionLog: string[] = [];
    
    for (const node of workflow) {
        switch (node.type) {
            case 'start':
                executionLog.push(`Starting workflow: ${node.title}`);
                break;
            case 'task':
                executionLog.push(`Executing task: ${node.title}`);
                break;
            case 'approval':
                executionLog.push(`Waiting for approval: ${node.title}`);
                break;
            case 'automated':
                executionLog.push(`Executing automated action: ${node.title}`);
                break;
            case 'end':
                executionLog.push(`Ending workflow: ${node.endMessage}`);
                break;
            default:
                executionLog.push(`Unknown node type: ${node.type}`);
        }
    }

    return {
        success: true,
        log: executionLog,
    };
};

export { simulateWorkflow };