export interface WorkflowNode {
    id: string;
    type: 'start' | 'task' | 'approval' | 'automated' | 'end';
    position: { x: number; y: number };
    data: any; // This can be further defined based on node types
}

export interface Workflow {
    nodes: WorkflowNode[];
    edges: { source: string; target: string }[];
}

export interface SimulationResult {
    steps: Array<{
        nodeId: string;
        action: string;
        status: 'success' | 'failure';
        message?: string;
    }>;
}