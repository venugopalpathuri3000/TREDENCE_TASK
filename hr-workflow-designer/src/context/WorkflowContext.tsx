import React, { createContext, useContext, useReducer } from 'react';
import { WorkflowAction, WorkflowState } from '../types/workflow';

const WorkflowContext = createContext<{
  state: WorkflowState;
  dispatch: React.Dispatch<WorkflowAction>;
} | undefined>(undefined);

const workflowReducer = (state: WorkflowState, action: WorkflowAction): WorkflowState => {
  switch (action.type) {
    case 'ADD_NODE':
      return { ...state, nodes: [...state.nodes, action.payload] };
    case 'REMOVE_NODE':
      return { ...state, nodes: state.nodes.filter(node => node.id !== action.payload) };
    case 'CONNECT_NODES':
      return { ...state, edges: [...state.edges, action.payload] };
    case 'DISCONNECT_NODES':
      return { ...state, edges: state.edges.filter(edge => edge.source !== action.payload.source || edge.target !== action.payload.target) };
    case 'UPDATE_NODE':
      return {
        ...state,
        nodes: state.nodes.map(node => (node.id === action.payload.id ? { ...node, ...action.payload.data } : node)),
      };
    case 'SET_WORKFLOW':
      return action.payload;
    default:
      return state;
  }
};

export const WorkflowProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(workflowReducer, { nodes: [], edges: [] });

  return (
    <WorkflowContext.Provider value={{ state, dispatch }}>
      {children}
    </WorkflowContext.Provider>
  );
};

export const useWorkflow = () => {
  const context = useContext(WorkflowContext);
  if (context === undefined) {
    throw new Error('useWorkflow must be used within a WorkflowProvider');
  }
  return context;
};