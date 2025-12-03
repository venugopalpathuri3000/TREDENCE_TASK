import React from 'react';
import { useForm } from 'react-hook-form';

interface StartNodeFormProps {
  onSubmit: (data: any) => void;
  initialData?: {
    title: string;
    metadata: Record<string, string>;
  };
}

const StartNodeForm: React.FC<StartNodeFormProps> = ({ onSubmit, initialData }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: initialData || { title: '', metadata: {} },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Start Title</label>
        <input {...register('title', { required: true })} />
      </div>
      <div>
        <label>Metadata</label>
        <input {...register('metadata.key')} placeholder="Key" />
        <input {...register('metadata.value')} placeholder="Value" />
      </div>
      <button type="submit">Save</button>
    </form>
  );
};

export default StartNodeForm;