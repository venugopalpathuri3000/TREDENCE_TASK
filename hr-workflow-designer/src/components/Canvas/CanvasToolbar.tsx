import React from 'react';

const CanvasToolbar: React.FC<{ onDelete: () => void; onValidate: () => void; }> = ({ onDelete, onValidate }) => {
    return (
        <div className="canvas-toolbar">
            <button onClick={onDelete}>Delete Selected</button>
            <button onClick={onValidate}>Validate Workflow</button>
        </div>
    );
};

export default CanvasToolbar;