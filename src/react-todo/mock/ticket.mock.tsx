const MockTicketData = [
  {
    ticketId: generateId(),
    name: 'Implement Apollo Graphql',
    description: 'Implement graphql',
    type: 'coding',
    status: 'todo',
    priority: 2,
  },
  {
    ticketId: generateId(),
    name: 'Implement DND',
    description: 'Implement drag and drop functionality',
    type: 'coding',
    status: 'todo',
    priority: 1,
  },
  {
    ticketId: generateId(),
    name: 'Advanced fetch (graphql)',
    description: 'study Graphql further',
    type: 'coding',
    status: 'todo',
    priority: 3,
  },
  {
    ticketId: generateId(),
    name: 'Code cleanup (angular)',
    description: 'cleanup on my-commerce repo',
    type: 'coding',
    status: 'in progress',
    priority: 1,
  },
  {
    ticketId: generateId(),
    name: 'Study Postgres',
    description: 'just a background about postgresql',
    type: 'research',
    status: 'todo',
    priority: 2,
  },
  {
    ticketId: generateId(),
    name: 'Study SQL',
    description: 'learn to do advance SQL queries',
    type: 'research',
    status: 'in progress',
    priority: 2,
  },
];

const TicketState = {
  ticketId: generateId(),
  name: '',
  description: '',
  type: 'coding',
  status: 'todo',
  priority: 3,
};

function generateId() {
  return Math.floor((Math.random() * 9999999) + 1);
}

export { MockTicketData, TicketState};