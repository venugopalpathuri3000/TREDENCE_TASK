import { Node } from '../types/nodes';

export const validateWorkflowGraph = (nodes: Node[], edges: { source: string; target: string }[]) => {
    const startNodeExists = nodes.some(node => node.type === 'start');
    const endNodeExists = nodes.some(node => node.type === 'end');

    if (!startNodeExists) {
        return { valid: false, message: 'Workflow must have a Start Node.' };
    }

    if (!endNodeExists) {
        return { valid: false, message: 'Workflow must have an End Node.' };
    }

    const visited = new Set<string>();
    const hasCycle = (nodeId: string): boolean => {
        if (visited.has(nodeId)) return true;
        visited.add(nodeId);

        const outgoingEdges = edges.filter(edge => edge.source === nodeId);
        for (const edge of outgoingEdges) {
            if (hasCycle(edge.target)) {
                return true;
            }
        }
        visited.delete(nodeId);
        return false;
    };

    if (hasCycle(nodes[0].id)) {
        return { valid: false, message: 'Workflow contains a cycle.' };
    }

    return { valid: true, message: 'Workflow is valid.' };
};