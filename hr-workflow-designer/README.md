# HR Workflow Designer

## Overview

The HR Workflow Designer is a React-based application that allows HR administrators to visually create and test internal workflows such as onboarding, leave approval, and document verification. The application utilizes React Flow for a drag-and-drop interface, enabling users to design workflows by connecting various node types.

## Features

- **Workflow Canvas**: A drag-and-drop interface for creating workflows.
- **Custom Node Types**:
  - Start Node
  - Task Node
  - Approval Node
  - Automated Step Node
  - End Node
- **Node Configuration Forms**: Editable forms for each node type to customize properties.
- **Mock API Integration**: Simulated backend interactions for automated actions and workflow execution.
- **Workflow Testing Panel**: A sandbox environment to simulate and validate workflows.

## Architecture

The application is structured into several key components:

- **Components**: Contains all UI components, including the workflow canvas, node types, forms, and sandbox testing panel.
- **Hooks**: Custom hooks for managing workflow state, node forms, validation, and simulation.
- **Context**: Provides a context for managing the workflow state across components.
- **API**: Mock API functions for simulating backend interactions.
- **Types**: TypeScript definitions for workflows, nodes, forms, and API responses.
- **Utils**: Utility functions for graph validation, node creation, and workflow serialization.

## Setup Instructions

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd hr-workflow-designer
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run the Application**:
   ```bash
   npm run dev
   ```

4. **Open in Browser**:
   Navigate to `http://localhost:3000` to view the application.

## Design Decisions

- **React Flow**: Chosen for its powerful capabilities in managing complex graphs and workflows.
- **TypeScript**: Used for type safety and better development experience.
- **Modular Architecture**: Components and hooks are designed to be reusable and easily extendable for future enhancements.

## Future Enhancements

- Implement export/import functionality for workflows as JSON.
- Add undo/redo capabilities for workflow modifications.
- Introduce a mini-map or zoom controls for better navigation of large workflows.
- Enhance validation feedback by visually indicating errors on nodes.

## Assumptions

- The application does not require authentication or backend persistence.
- The focus is on functionality and architectural clarity rather than pixel-perfect UI design.

## Acknowledgments

This project is inspired by the need for efficient HR processes and aims to streamline workflow management within organizations.