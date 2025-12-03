import React from 'react';

const Header: React.FC = () => {
    return (
        <header style={{ padding: '10px', backgroundColor: '#f5f5f5', borderBottom: '1px solid #ccc' }}>
            <h1 style={{ margin: 0 }}>HR Workflow Designer</h1>
            <p style={{ margin: 0, fontSize: '14px' }}>Design and manage your HR workflows visually</p>
        </header>
    );
};

export default Header;