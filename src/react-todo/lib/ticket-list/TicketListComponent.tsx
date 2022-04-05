import TicketComponent from "../ticket/TicketComponent";
import { TicketListProps } from "../../interface/ticketList.interface";
import MockTicketData from "../../mock/ticket.mock";
import { useDrag, useDrop } from "react-dnd";
import { createStore } from "redux";

const ItemTypes = {
  TICKET: 'ticket',
}
const store = createStore(TicketReducer, MockTicketData);
function TicketReducer(state: any, action: any) {
  switch(action.type) {
    case 'MOVE_TICKET_TODO':
      return state
      .map((res: any) => {
        if(res['ticketId'] === action.payload.id) {
          res['status'] = 'todo';
        }
        return res;
      });
    case 'MOVE_TICKET_IN_PROGRESS':
        return state
        .map((res: any) => {
          if(res['ticketId'] === action.payload.id) {
            res['status'] = 'in progress';
          }
          return res;
        });
    default:
      return state;
  }
}


function DroppableBoard() {
  return(
    <></>
  );
}

function DraggableTicket({id, ticketName, status}: any) {
  const [{isDragging}, drag ] = useDrag(() => ({
    type: ItemTypes.TICKET,
    item: {id, status},
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return(
    <div 
      key={id}
      ref={drag}
      style={{
        opacity: isDragging ? 0.7 : 1,
        cursor: 'move',
      }}
      className="ticket"
    >
      {ticketName}
    </div>
  );
}

function MoveTicket(fetch: any): void {
  console.log('fetch: ', fetch);
  fetch.status = 'in progress';
  switch(fetch.status) {
    case 'todo':
      store.dispatch({
        type: 'MOVE_TICKET_TODO',
        payload: fetch,
      });
    break;
    case 'in progress':
      store.dispatch({
        type: 'MOVE_TICKET_IN_PROGRESS',
        payload: fetch,
      });
    break;
    default:
      return;
  }
  
}

function TicketListComponent(): any {
  const TicketList = store.getState();
  const [{isOver}, drop] = useDrop(() => ({
    accept: ItemTypes.TICKET,
    drop: (ticketId, monitor) => {
      console.log('drop result: ');
      console.log(monitor.getDropResult());

      MoveTicket(ticketId)
    },
    collect: monitor => ({
      isOver: !!monitor.isOver()
    })
  }));

  return(
    <>
    { TicketList &&
      <div className="ticket-list-container">
        <div className="task-container">
          <div className="todo-task-container">
          {
            TicketList
            .filter((ticket:any) => ticket.status == 'todo')
            .map((ticketTemplate: any) => {
              return(
                <DraggableTicket
                  key={ticketTemplate.ticketId}
                  id={ticketTemplate.ticketId}
                  status={ticketTemplate.status}
                  ticketName={ticketTemplate.name}
                />
              );
            })
          }
          </div>
          <div
            className="in-progess-container"
            ref={drop}
          >
            {
              TicketList
              .filter((ticket: any) => ticket.status === 'in progress')
              .map((ticketTemplate: any) => <div key={ticketTemplate.ticketId} className="ticket">{ticketTemplate.name}</div>)
            }
          </div>
          <div className="done-container">
            
          </div>
        </div>
      </div>
    }
    </>
  );
}

export default TicketListComponent;