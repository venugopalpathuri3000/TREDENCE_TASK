import React from 'react';
import { Handle, Position } from 'react-flow-renderer';
import { TaskNodeProps } from '../../types/nodes';
import './nodeStyles.css';

const TaskNode: React.FC<TaskNodeProps> = ({ data }) => {
    return (
        <div className="task-node">
            <Handle type="target" position={Position.Top} />
            <div className="task-node-content">
                <h4>{data.title}</h4>
                <p>{data.description}</p>
                <p>Assignee: {data.assignee}</p>
                <p>Due Date: {data.dueDate}</p>
            </div>
            <Handle type="source" position={Position.Bottom} />
        </div>
    );
};

export default TaskNode;