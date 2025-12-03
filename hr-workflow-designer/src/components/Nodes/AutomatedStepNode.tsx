import React from 'react';
import { Handle, Position } from 'react-flow-renderer';
import { AutomatedStepNodeProps } from '../../types/nodes';
import './nodeStyles.css';

const AutomatedStepNode: React.FC<AutomatedStepNodeProps> = ({ data }) => {
    return (
        <div className="automated-step-node">
            <Handle type="target" position={Position.Top} />
            <div className="node-content">
                <h4>{data.title}</h4>
                <p>Action: {data.action}</p>
                <p>Parameters: {JSON.stringify(data.params)}</p>
            </div>
            <Handle type="source" position={Position.Bottom} />
        </div>
    );
};

export default AutomatedStepNode;