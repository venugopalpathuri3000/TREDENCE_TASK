import React from 'react';
import { useNodeForm } from '../../hooks/useNodeForm';
import StartNodeForm from './StartNodeForm';
import TaskNodeForm from './TaskNodeForm';
import ApprovalNodeForm from './ApprovalNodeForm';
import AutomatedStepNodeForm from './AutomatedStepNodeForm';
import EndNodeForm from './EndNodeForm';

const NodeFormPanel = ({ selectedNode }) => {
    const { formData, handleChange } = useNodeForm(selectedNode);

    const renderForm = () => {
        switch (selectedNode.type) {
            case 'start':
                return <StartNodeForm data={formData} onChange={handleChange} />;
            case 'task':
                return <TaskNodeForm data={formData} onChange={handleChange} />;
            case 'approval':
                return <ApprovalNodeForm data={formData} onChange={handleChange} />;
            case 'automated':
                return <AutomatedStepNodeForm data={formData} onChange={handleChange} />;
            case 'end':
                return <EndNodeForm data={formData} onChange={handleChange} />;
            default:
                return null;
        }
    };

    return (
        <div className="node-form-panel">
            {selectedNode ? renderForm() : <p>Select a node to edit its properties.</p>}
        </div>
    );
};

export default NodeFormPanel;