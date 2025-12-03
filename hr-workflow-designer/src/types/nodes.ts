export interface StartNode {
    id: string;
    type: 'start';
    title: string;
    metadata?: Record<string, string>;
}

export interface TaskNode {
    id: string;
    type: 'task';
    title: string;
    description?: string;
    assignee?: string;
    dueDate?: string;
    customFields?: Record<string, string>;
}

export interface ApprovalNode {
    id: string;
    type: 'approval';
    title: string;
    approverRole: string;
    autoApproveThreshold?: number;
}

export interface AutomatedStepNode {
    id: string;
    type: 'automated';
    title: string;
    actionId: string;
    actionParams?: Record<string, string>;
}

export interface EndNode {
    id: string;
    type: 'end';
    endMessage?: string;
    summaryFlag?: boolean;
}

export type WorkflowNode = StartNode | TaskNode | ApprovalNode | AutomatedStepNode | EndNode;

export interface Workflow {
    nodes: WorkflowNode[];
    edges: { from: string; to: string }[];
}