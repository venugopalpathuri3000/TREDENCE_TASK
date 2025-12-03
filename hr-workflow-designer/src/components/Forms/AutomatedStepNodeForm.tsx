import React, { useEffect, useState } from 'react';
import { useNodeForm } from '../../hooks/useNodeForm';
import { getAutomatedActions } from '../../api/automations';
import FormField from './FormField';

const AutomatedStepNodeForm = ({ nodeData, onChange }) => {
    const [actions, setActions] = useState([]);
    const { formData, handleChange } = useNodeForm(nodeData, onChange);

    useEffect(() => {
        const fetchActions = async () => {
            const automatedActions = await getAutomatedActions();
            setActions(automatedActions);
        };

        fetchActions();
    }, []);

    return (
        <div>
            <h3>Automated Step Node Configuration</h3>
            <FormField
                label="Title"
                name="title"
                value={formData.title}
                onChange={handleChange}
            />
            <FormField
                label="Choose Action"
                name="actionId"
                value={formData.actionId}
                onChange={handleChange}
                component="select"
            >
                <option value="">Select an action</option>
                {actions.map(action => (
                    <option key={action.id} value={action.id}>
                        {action.label}
                    </option>
                ))}
            </FormField>
            {formData.actionId && actions.find(action => action.id === formData.actionId)?.params.map(param => (
                <FormField
                    key={param}
                    label={`Parameter: ${param}`}
                    name={`params.${param}`}
                    value={formData.params[param] || ''}
                    onChange={handleChange}
                />
            ))}
        </div>
    );
};

export default AutomatedStepNodeForm;