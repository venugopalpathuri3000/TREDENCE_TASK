import { WorkflowNode } from '../types/nodes';

export const serializeWorkflow = (nodes: WorkflowNode[]) => {
    return JSON.stringify(nodes, null, 2);
};

export const deserializeWorkflow = (json: string): WorkflowNode[] => {
    try {
        return JSON.parse(json);
    } catch (error) {
        console.error("Failed to deserialize workflow:", error);
        return [];
    }
};