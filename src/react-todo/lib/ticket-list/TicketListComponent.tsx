import TicketComponent from "../ticket/TicketComponent";
import { TicketListProps } from "../../interface/ticketList.interface";
import { useDrag, useDrop } from "react-dnd";
import { useEffect } from "react";
import { useSelector, useStore } from "react-redux";

const ItemTypes = {
  TICKET: 'ticket',
}
const availableStatus = [
  {status: 'todo', action: 'MOVE_TICKET_TODO'},
  {status: 'in progress', action: 'MOVE_TICKET_IN_PROGRESS'},
  {status: 'done', action: 'MOVE_TICKET_DONE'},
];

interface Ticket {
  ticketId: number,
  name: string,
  priority?: number,
  description?: string,
  status: string,
}

function TicketListComponent(): any {
  const store = useStore();
  let TicketList = useSelector(state => state);

  // useEffect(() => {
  //   console.log('[RENDER] current state: ', TicketList);
  // }, [TicketList]);

  function DroppableBoard({templateClass, boardType, list}: any) {
    const [{didDrop}, drop] = useDrop(() => ({
      accept: ItemTypes.TICKET,
      drop: (ticketId) => {
        MoveTicket(ticketId, boardType) 
      },
      collect: monitor => ({
        isOver: !!monitor.isOver(),
        didDrop: monitor.didDrop()
      })
    }), [boardType]);

    return(
      <div
        className={`${templateClass}`}
        ref={drop}
      >
        <TicketListTemplate ticketList={list} boardType={boardType}/>
      </div>
    );
  }
  
  function TicketListTemplate({ticketList, boardType}: any) {
    return(
      <>
      {
        ticketList
          .filter((ticket: any) => ticket.status === boardType)
          .sort((a: any, b: any) => {
            if(a.priority < b.priority) {
              return -1;
            }
            return 1;
          })
          .map((ticketTemplate: any) => {
            return(
              <DraggableTicket
                key={ticketTemplate.ticketId}
                id={ticketTemplate.ticketId}
                status={ticketTemplate.status}
                ticket={ticketTemplate}
              />
            )
          })
      }
      </>
    );
  }

  function DraggableTicket({id, ticket, status}: {id: number, status: string, ticket: Ticket}) {
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
        <TicketComponent
         {...ticket}
        ></TicketComponent>
      </div>
    );
  }

  function MoveTicket(fetch: any, targetStatus: any): void {

    const actionObj = [...availableStatus]
    .filter(({status}) => targetStatus === status).shift();

    store.dispatch({
      type: actionObj?.action,
      payload: fetch,
    });

  }

  return(
    <>
      <div className="ticket-list-container">
        <div className="task-container">
          <DroppableBoard
            templateClass={'todo-task-container'}
            boardType={'todo'}
            list={TicketList}/>
          <DroppableBoard
            templateClass={'in-progress-container'}
            boardType={'in progress'}
            list={TicketList}/>
          <DroppableBoard
            templateClass={'done-container'}
            boardType={'done'}
            list={TicketList}/>
        </div>
      </div>
    </>
  );
}

export { TicketListComponent };