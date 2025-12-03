import { useState } from 'react';
import { NodeType, NodeFormData } from '../types/forms';

const useNodeForm = (initialData: NodeFormData, nodeType: NodeType) => {
    const [formData, setFormData] = useState<NodeFormData>(initialData);

    const handleChange = (field: string, value: any) => {
        setFormData(prevData => ({
            ...prevData,
            [field]: value,
        }));
    };

    const resetForm = () => {
        setFormData(initialData);
    };

    return {
        formData,
        handleChange,
        resetForm,
    };
};

export default useNodeForm;