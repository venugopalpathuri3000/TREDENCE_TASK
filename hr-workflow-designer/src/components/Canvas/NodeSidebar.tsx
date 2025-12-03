import React from 'react';
import { NodeType } from '../../types/nodes';

const nodeTypes: NodeType[] = [
    { id: 'start', label: 'Start Node' },
    { id: 'task', label: 'Task Node' },
    { id: 'approval', label: 'Approval Node' },
    { id: 'automated', label: 'Automated Step Node' },
    { id: 'end', label: 'End Node' },
];

const NodeSidebar: React.FC<{ onNodeSelect: (nodeType: NodeType) => void }> = ({ onNodeSelect }) => {
    return (
        <div className="node-sidebar">
            <h3>Available Nodes</h3>
            <ul>
                {nodeTypes.map((node) => (
                    <li key={node.id} onClick={() => onNodeSelect(node)}>
                        {node.label}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NodeSidebar;