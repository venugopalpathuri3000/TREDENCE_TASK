export interface StartNodeForm {
    title: string;
    metadata?: Record<string, string>;
}

export interface TaskNodeForm {
    title: string;
    description?: string;
    assignee?: string;
    dueDate?: string;
    customFields?: Record<string, string>;
}

export interface ApprovalNodeForm {
    title: string;
    approverRole: string;
    autoApproveThreshold?: number;
}

export interface AutomatedStepNodeForm {
    title: string;
    actionId: string;
    actionParams: Record<string, string>;
}

export interface EndNodeForm {
    endMessage: string;
    summaryFlag: boolean;
}