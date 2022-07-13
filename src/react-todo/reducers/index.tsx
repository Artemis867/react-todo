export function rootReducer(state: any, action: any) {
  let updateObj: any = [...state]
  .filter(({ticketId}) => ticketId == action?.payload?.id)
  .shift();

  switch(action.type) {
    case 'MOVE_TICKET_TODO':
      return [...state].map(ticket => {
        if(ticket.ticketId == updateObj?.ticketId) {
          return {...updateObj, status: 'todo'};
        }
        return ticket;
      });
    case 'MOVE_TICKET_IN_PROGRESS':
      return [...state].map(ticket => {
        if(ticket.ticketId == updateObj?.ticketId) {
          return {...updateObj, status: 'in progress'};
        }
        return ticket;
      });
    case 'MOVE_TICKET_DONE':
      return [...state].map(ticket => {
        if(ticket.ticketId == updateObj?.ticketId) {
          return {...updateObj, status: 'done'};
        }
        return ticket;
      });
    case 'ADD_TICKET':
      console.log('[ACTION] add ticket: ', action.payload);
      return [...state, action.payload];
    case 'DELETE_TICKET':
      console.log('[ACTION] delete ticket: ', action.payload);
      return [...state]
      .filter(({ticketId}) => ticketId !== action.payload.id );
    default:
      return state;
  }
}