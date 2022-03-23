import { TicketProps, TicketState } from "../../interface/ticket.interface";


function TicketComponent(props: TicketProps) {
  return(
    <>
      <div className="ticket-container">
        <span>{props.ticketData.name}</span>
      </div>
    </>
  )
}

export default TicketComponent;