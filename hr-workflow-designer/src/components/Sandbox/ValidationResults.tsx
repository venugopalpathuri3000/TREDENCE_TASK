import React from 'react';

interface ValidationResult {
    message: string;
    isValid: boolean;
}

interface ValidationResultsProps {
    results: ValidationResult[];
}

const ValidationResults: React.FC<ValidationResultsProps> = ({ results }) => {
    return (
        <div className="validation-results">
            <h3>Validation Results</h3>
            <ul>
                {results.map((result, index) => (
                    <li key={index} style={{ color: result.isValid ? 'green' : 'red' }}>
                        {result.message}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ValidationResults;