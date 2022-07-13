const MockTicketData = [
  {
    ticketId: generateId(),
    name: 'Implement Apollo Graphql',
    description: 'Implement graphql',
    category: [1],
    status: 'todo',
    priority: 2,
  },
  {
    ticketId: generateId(),
    name: 'Implement DND',
    description: 'Implement drag and drop functionality',
    category: [3],
    status: 'todo',
    priority: 1,
  },
  {
    ticketId: generateId(),
    name: 'Advanced fetch (graphql)',
    description: 'study Graphql further',
    category: [1,2],
    status: 'todo',
    priority: 3,
  },
  {
    ticketId: generateId(),
    name: 'Code cleanup (angular)',
    description: 'cleanup on my-commerce repo',
    category: [2,3],
    status: 'in progress',
    priority: 1,
  },
  {
    ticketId: generateId(),
    name: 'Study Postgres',
    description: 'just a background about postgresql',
    category: [1],
    status: 'todo',
    priority: 2,
  },
  {
    ticketId: generateId(),
    name: 'Study SQL',
    description: 'learn to do advance SQL queries',
    category: [2],
    status: 'in progress',
    priority: 2,
  },
  {
    ticketId: generateId(),
    name: 'Update to Angular 13',
    description: 'need to update side projects to Angular 13',
    category: [2],
    status: 'in progress',
    priority: 3,
  }
];

const TicketState = {
  ticketId: generateId(),
  name: '',
  description: '',
  category: [],
  status: 'todo',
  priority: 3,
};

function generateId() {
  return Math.floor((Math.random() * 9999999) + 1);
}

export { MockTicketData, TicketState};