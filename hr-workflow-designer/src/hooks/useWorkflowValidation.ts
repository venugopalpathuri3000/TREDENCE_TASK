import { useState } from 'react';
import { WorkflowNode } from '../types/nodes';
import { validateGraphStructure } from '../utils/graphValidation';

const useWorkflowValidation = (nodes: WorkflowNode[], edges: any[]) => {
    const [validationErrors, setValidationErrors] = useState<string[]>([]);

    const validateWorkflow = () => {
        const errors: string[] = [];

        // Validate that the start node is present and is the first node
        const startNode = nodes.find(node => node.type === 'start');
        if (!startNode) {
            errors.push('A Start Node is required.');
        } else if (nodes[0].id !== startNode.id) {
            errors.push('The Start Node must be the first node in the workflow.');
        }

        // Validate graph structure (e.g., cycles, disconnected nodes)
        const graphValidationErrors = validateGraphStructure(nodes, edges);
        if (graphValidationErrors.length > 0) {
            errors.push(...graphValidationErrors);
        }

        setValidationErrors(errors);
        return errors.length === 0;
    };

    return {
        validationErrors,
        validateWorkflow,
    };
};

export default useWorkflowValidation;