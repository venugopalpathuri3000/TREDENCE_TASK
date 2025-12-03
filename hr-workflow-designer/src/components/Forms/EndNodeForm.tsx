import React from 'react';
import { useForm } from 'react-hook-form';
import { EndNodeProps } from '../../types/forms';

const EndNodeForm: React.FC<{ onSubmit: (data: EndNodeProps) => void; initialData?: EndNodeProps }> = ({ onSubmit, initialData }) => {
    const { register, handleSubmit } = useForm<EndNodeProps>({
        defaultValues: initialData,
    });

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>End Message</label>
                <input {...register('endMessage', { required: true })} />
            </div>
            <div>
                <label>Summary Flag</label>
                <input type="checkbox" {...register('summaryFlag')} />
            </div>
            <button type="submit">Save</button>
        </form>
    );
};

export default EndNodeForm;