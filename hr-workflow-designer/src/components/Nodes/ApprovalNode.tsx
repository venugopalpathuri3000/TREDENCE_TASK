import React from 'react';
import { NodeProps } from 'react-flow-renderer';
import { ApprovalNodeForm } from '../Forms/ApprovalNodeForm';
import { NodeStyles } from './nodeStyles';

const ApprovalNode: React.FC<NodeProps> = ({ data, isSelected, selected }) => {
    return (
        <div style={NodeStyles.node}>
            <h3>{data.title || 'Approval Node'}</h3>
            {isSelected && <ApprovalNodeForm data={data} />}
        </div>
    );
};

export default ApprovalNode;