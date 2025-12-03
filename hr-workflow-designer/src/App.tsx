import React from 'react';
import { WorkflowProvider } from './context/WorkflowProvider';
import MainLayout from './components/Layout/MainLayout';

const App = () => {
  return (
    <WorkflowProvider>
      <MainLayout />
    </WorkflowProvider>
  );
};

export default App;