export function rootReducer(state: any, action: any) {
    const newState = [...state];
  switch(action.type) {
    case 'MOVE_TICKET_TODO':
      newState
      .map((res: any) => {
        if(res['ticketId'] === action.payload.id) {
          res['status'] = 'todo';
        }
        return res;
      });
      return newState;
    break;
    case 'MOVE_TICKET_IN_PROGRESS':
      newState
      .map((res: any) => {
        if(res['ticketId'] === action.payload.id) {
          res['status'] = 'in progress';
        }
        return res;
      });
      return newState;
    case 'ADD_TICKET':
      console.log('[ACTION] add ticket: ', action.payload);
      return [...newState, action.payload];
    break;
    default:
      return state;
  }
}