const MockTicketData: any = [];

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