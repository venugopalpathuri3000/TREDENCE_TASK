import React from 'react';
import { Handle, Position } from 'react-flow-renderer';
import './nodeStyles.css';

const EndNode = ({ data }) => {
    return (
        <div className="end-node">
            <Handle type="target" position={Position.Top} />
            <div className="node-content">
                <h4>End Node</h4>
                <p>{data.endMessage}</p>
                <label>
                    Summary:
                    <input type="checkbox" checked={data.summaryFlag} readOnly />
                </label>
            </div>
            <Handle type="source" position={Position.Bottom} />
        </div>
    );
};

export default EndNode;