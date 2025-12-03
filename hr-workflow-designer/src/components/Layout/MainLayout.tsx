import React from 'react';
import Header from './Header';
import './MainLayout.css'; // Assuming you have some styles for the layout

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="main-layout">
            <Header />
            <main className="content">
                {children}
            </main>
        </div>
    );
};

export default MainLayout;