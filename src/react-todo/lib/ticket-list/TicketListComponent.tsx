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
    case 'MOVE_TICKET':
      return state
      .map((res: any) => {
        res['status'] = 'in progress';
        return res;
      });
    break;
    default:
      return state;
  }
}


function DraggableTicket({id, ticketName}: any) {
  const [{isDragging}, drag ] = useDrag(() => ({
    type: ItemTypes.TICKET,
    item: {id},
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
  store.dispatch({
    type: 'MOVE_TICKET',
    payload: {fetch},
  });
  console.log(store.getState());
}

function TicketListComponent(): any {
  const TicketList = store.getState();

  console.log('ticket list: ');
  console.log(TicketList);
  const [{isOver}, drop] = useDrop(() => ({
    accept: ItemTypes.TICKET,
    drop: (ticketId) => MoveTicket(ticketId),
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
                <DraggableTicket key={ticketTemplate.id} id={ticketTemplate.id} ticketName={ticketTemplate.name}/>
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