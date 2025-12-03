import React from 'react';

interface FormFieldProps {
  label: string;
  value: string | number | boolean;
  onChange: (value: string | number | boolean) => void;
  type?: 'text' | 'number' | 'date' | 'checkbox' | 'select';
  options?: { value: string; label: string }[];
}

const FormField: React.FC<FormFieldProps> = ({ label, value, onChange, type = 'text', options }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { type, checked, value } = event.target;
    onChange(type === 'checkbox' ? checked : value);
  };

  return (
    <div className="form-field">
      <label>{label}</label>
      {type === 'select' ? (
        <select value={value as string} onChange={handleChange}>
          {options?.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          value={type === 'checkbox' ? undefined : value}
          checked={type === 'checkbox' ? value as boolean : undefined}
          onChange={handleChange}
        />
      )}
    </div>
  );
};

export default FormField;