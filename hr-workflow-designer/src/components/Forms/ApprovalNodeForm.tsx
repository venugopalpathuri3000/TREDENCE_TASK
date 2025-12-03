import React from 'react';
import { useForm } from 'react-hook-form';
import { ApprovalNodeProps } from '../../types/forms';

const ApprovalNodeForm: React.FC<{ onSubmit: (data: ApprovalNodeProps) => void; initialData?: ApprovalNodeProps }> = ({ onSubmit, initialData }) => {
    const { register, handleSubmit } = useForm<ApprovalNodeProps>({
        defaultValues: initialData,
    });

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Title</label>
                <input {...register('title', { required: true })} />
            </div>
            <div>
                <label>Approver Role</label>
                <input {...register('approverRole')} />
            </div>
            <div>
                <label>Auto-Approve Threshold</label>
                <input type="number" {...register('autoApproveThreshold')} />
            </div>
            <button type="submit">Save</button>
        </form>
    );
};

export default ApprovalNodeForm;