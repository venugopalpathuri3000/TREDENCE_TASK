import { StartNode } from '../components/Nodes/StartNode';
import { TaskNode } from '../components/Nodes/TaskNode';
import { ApprovalNode } from '../components/Nodes/ApprovalNode';
import { AutomatedStepNode } from '../components/Nodes/AutomatedStepNode';
import { EndNode } from '../components/Nodes/EndNode';
import { NodeType } from '../types/nodes';

export const createNode = (type: NodeType, id: string, data: any) => {
    switch (type) {
        case 'start':
            return { id, type, data: { ...data, component: StartNode } };
        case 'task':
            return { id, type, data: { ...data, component: TaskNode } };
        case 'approval':
            return { id, type, data: { ...data, component: ApprovalNode } };
        case 'automated':
            return { id, type, data: { ...data, component: AutomatedStepNode } };
        case 'end':
            return { id, type, data: { ...data, component: EndNode } };
        default:
            throw new Error(`Unknown node type: ${type}`);
    }
};