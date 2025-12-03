import React from 'react';
import { useForm } from 'react-hook-form';
import { TaskNodeProps } from '../../types/forms';

const TaskNodeForm: React.FC<{ onSubmit: (data: TaskNodeProps) => void; initialData?: TaskNodeProps }> = ({ onSubmit, initialData }) => {
    const { register, handleSubmit, formState: { errors } } = useForm<TaskNodeProps>({
        defaultValues: initialData,
    });

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Title</label>
                <input {...register('title', { required: true })} />
                {errors.title && <span>This field is required</span>}
            </div>
            <div>
                <label>Description</label>
                <textarea {...register('description')} />
            </div>
            <div>
                <label>Assignee</label>
                <input {...register('assignee')} />
            </div>
            <div>
                <label>Due Date</label>
                <input type="date" {...register('dueDate')} />
            </div>
            <div>
                <label>Custom Fields</label>
                <input {...register('customFields')} placeholder="key=value pairs" />
            </div>
            <button type="submit">Save</button>
        </form>
    );
};

export default TaskNodeForm;