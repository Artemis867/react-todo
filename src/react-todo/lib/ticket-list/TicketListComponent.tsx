import TicketComponent from "../ticket/TicketComponent";
import { TicketListProps } from "../../interface/ticketList.interface";

function TicketListComponent(props: TicketListProps) {
  const TicketList = props?.mockTicket?.ticketData;
  return(
    <>
      <div className="ticket-list-container">
      { TicketList &&
        TicketList
        .map((res: any, i: number) => <TicketComponent key={i} ticketData={res}/>)
      }
      </div>
    </>
  );
}

export default TicketListComponent;