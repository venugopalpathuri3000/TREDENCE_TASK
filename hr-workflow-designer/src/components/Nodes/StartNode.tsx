import React from 'react';
import { Handle } from 'react-flow-renderer';
import { NodeProps } from '../../types/nodes';
import './nodeStyles.css';

const StartNode: React.FC<NodeProps> = ({ data }) => {
    return (
        <div className="start-node">
            <Handle type="target" position="top" />
            <div className="node-content">
                <h3>{data.title || 'Start Node'}</h3>
                {data.metadata && (
                    <div className="metadata">
                        {Object.entries(data.metadata).map(([key, value]) => (
                            <div key={key}>
                                <strong>{key}:</strong> {value}
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <Handle type="source" position="bottom" />
        </div>
    );
};

export default StartNode;