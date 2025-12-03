import { rest } from 'msw';

const automations = [
  { id: 'send_email', label: 'Send Email', params: ['to', 'subject'] },
  { id: 'generate_doc', label: 'Generate Document', params: ['template', 'recipient'] },
];

export const handlers = [
  rest.get('/automations', (req, res, ctx) => {
    return res(ctx.json(automations));
  }),

  rest.post('/simulate', (req, res, ctx) => {
    const workflow = req.body;
    // Simulate execution logic here
    const executionLog = workflow.nodes.map(node => ({
      id: node.id,
      status: 'Executed',
      message: `Node ${node.type} executed successfully.`,
    }));

    return res(ctx.json({ executionLog }));
  }),
];