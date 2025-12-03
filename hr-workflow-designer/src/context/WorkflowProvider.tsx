import React, { createContext, useContext, useState } from 'react';
import { WorkflowNode } from '../types/nodes';

interface WorkflowContextType {
  nodes: WorkflowNode[];
  setNodes: React.Dispatch<React.SetStateAction<WorkflowNode[]>>;
  edges: any[]; // Define a more specific type if needed
  setEdges: React.Dispatch<React.SetStateAction<any[]>>;
}

const WorkflowContext = createContext<WorkflowContextType | undefined>(undefined);

export const WorkflowProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [nodes, setNodes] = useState<WorkflowNode[]>([]);
  const [edges, setEdges] = useState<any[]>([]); // Define a more specific type if needed

  return (
    <WorkflowContext.Provider value={{ nodes, setNodes, edges, setEdges }}>
      {children}
    </WorkflowContext.Provider>
  );
};

export const useWorkflow = (): WorkflowContextType => {
  const context = useContext(WorkflowContext);
  if (!context) {
    throw new Error('useWorkflow must be used within a WorkflowProvider');
  }
  return context;
};