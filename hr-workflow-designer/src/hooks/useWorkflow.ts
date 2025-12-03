import { useState } from 'react';
import { WorkflowNode } from '../types/nodes';

const useWorkflow = () => {
    const [nodes, setNodes] = useState<WorkflowNode[]>([]);
    const [edges, setEdges] = useState<any[]>([]); // Replace 'any' with a specific type for edges if available

    const addNode = (node: WorkflowNode) => {
        setNodes((prevNodes) => [...prevNodes, node]);
    };

    const removeNode = (nodeId: string) => {
        setNodes((prevNodes) => prevNodes.filter((node) => node.id !== nodeId));
        setEdges((prevEdges) => prevEdges.filter((edge) => edge.source !== nodeId && edge.target !== nodeId));
    };

    const addEdge = (edge: any) => { // Replace 'any' with a specific type for edges if available
        setEdges((prevEdges) => [...prevEdges, edge]);
    };

    const removeEdge = (edgeId: string) => {
        setEdges((prevEdges) => prevEdges.filter((edge) => edge.id !== edgeId));
    };

    const clearWorkflow = () => {
        setNodes([]);
        setEdges([]);
    };

    return {
        nodes,
        edges,
        addNode,
        removeNode,
        addEdge,
        removeEdge,
        clearWorkflow,
    };
};

export default useWorkflow;