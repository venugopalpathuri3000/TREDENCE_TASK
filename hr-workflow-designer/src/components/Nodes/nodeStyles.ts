import { CSSProperties } from 'react';

export const nodeStyles: { [key: string]: CSSProperties } = {
  startNode: {
    background: '#A0D3E8',
    border: '1px solid #007BFF',
    borderRadius: '5px',
    padding: '10px',
    textAlign: 'center',
  },
  taskNode: {
    background: '#FFE5B4',
    border: '1px solid #FFA500',
    borderRadius: '5px',
    padding: '10px',
    textAlign: 'center',
  },
  approvalNode: {
    background: '#D4EDDA',
    border: '1px solid #28A745',
    borderRadius: '5px',
    padding: '10px',
    textAlign: 'center',
  },
  automatedStepNode: {
    background: '#F8D7DA',
    border: '1px solid #DC3545',
    borderRadius: '5px',
    padding: '10px',
    textAlign: 'center',
  },
  endNode: {
    background: '#E2E3E5',
    border: '1px solid #6C757D',
    borderRadius: '5px',
    padding: '10px',
    textAlign: 'center',
  },
};