import TicketComponent from "../ticket/TicketComponent";
import { TicketListProps } from "../../interface/ticketList.interface";
import { useDrag, useDrop } from "react-dnd";
import { useEffect } from "react";
import { useSelector, useStore } from "react-redux";

const ItemTypes = {
  TICKET: 'ticket',
}

function TicketListComponent(): any {
  const store = useStore();
  let TicketList = useSelector(state => state);

  useEffect(() => {
    console.log('[RENDER] current state: ', TicketList);
  }, [TicketList]);

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
    }),[boardType]);
  
    if(didDrop) {
      console.info('task moved', didDrop);
    }
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
          .map((ticketTemplate: any) => {
            return(
              <DraggableTicket
                key={ticketTemplate.ticketId}
                id={ticketTemplate.ticketId}
                status={ticketTemplate.status}
                ticketName={ticketTemplate.name}
              />
            )
          })
      }
      </>
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
  

  function MoveTicket(fetch: any, status: any): void {
    switch(status) {
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
          <div className="done-container">
            
          </div>
        </div>
      </div>
    </>
  );
}

export { TicketListComponent };