import React, { useCallback } from 'react';
import ReactFlow, { MiniMap, Controls, Background, addEdge, removeElements, updateEdge } from 'react-flow-renderer';
import { useWorkflow } from '../../hooks/useWorkflow';
import NodeSidebar from './NodeSidebar';
import CanvasToolbar from './CanvasToolbar';

const WorkflowCanvas = () => {
    const {
        elements,
        setElements,
        onConnect,
        onElementsRemove,
        onElementClick,
        onLoad,
    } = useWorkflow();

    const handleConnect = useCallback((params) => {
        setElements((els) => addEdge(params, els));
    }, [setElements]);

    const handleElementsRemove = useCallback((elementsToRemove) => {
        setElements((els) => removeElements(elementsToRemove, els));
    }, [setElements]);

    const handleElementClick = useCallback((event, element) => {
        onElementClick(element);
    }, [onElementClick]);

    return (
        <div style={{ display: 'flex', height: '100vh' }}>
            <NodeSidebar />
            <div style={{ flex: 1 }}>
                <ReactFlow
                    elements={elements}
                    onConnect={handleConnect}
                    onElementsRemove={handleElementsRemove}
                    onLoad={onLoad}
                    onElementClick={handleElementClick}
                    style={{ background: '#f0f0f0' }}
                >
                    <MiniMap />
                    <Controls />
                    <Background />
                </ReactFlow>
                <CanvasToolbar />
            </div>
        </div>
    );
};

export default WorkflowCanvas;