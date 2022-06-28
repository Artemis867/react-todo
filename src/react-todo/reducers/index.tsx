export function rootReducer(state: any, action: any) {
  const newState = [...state];
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
    break;
    case 'MOVE_TICKET_IN_PROGRESS':
      return [...state].map(ticket => {
        if(ticket.ticketId == updateObj?.ticketId) {
          return {...updateObj, status: 'in progress'};
        }
        return ticket;
      });
    break;
    case 'ADD_TICKET':
      console.log('[ACTION] add ticket: ', action.payload);
      return [...newState, action.payload];
    break;
    case 'DELETE_TICKET':
      console.log('[ACTION] delete ticket: ', action.payload);
      return [...state]
      .filter(({ticketId}) => ticketId !== action.payload.id );
    break;
    default:
      return state;
  }
}