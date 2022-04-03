import { useDrag } from "react-dnd";
import { TicketProps, TicketState } from "../../interface/ticket.interface";

const ItemTypes = {
  TICKET: 'ticket',
}

function TicketComponent(props: TicketProps) {

  const [{isDragging}, drag ] = useDrag(() => ({
    type: ItemTypes.TICKET,
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return(
    <>
      <div 
        className="ticket-container"
        ref={drag}
        style={{
          opacity: isDragging ? 0.5 : 1,
          cursor: 'move',
        }}
      >
        <span>{props.ticketData.name}</span>
      </div>
    </>
  )
}

export default TicketComponent;