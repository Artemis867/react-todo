import React from "react";
import { useStore } from "react-redux";

interface Ticket {
  ticketId: number,
  name: string,
  priority?: number,
  description?: string
}

const priorityList = [
  {level: 1, value: 'High'},
  {level: 2, value: 'Normal'},
  {level: 3, value: 'Low'}
];



function TicketComponent({ticketId, name, description, priority}: Ticket ): any {
  const mainStore = useStore();
  const priorityLevel = priorityList.filter(({level}) => level == priority)
  .shift()?.value;

  function deleteTicket(event: React.FormEvent<EventTarget>): void {
    console.log('[CLICKED] delete this ticket: ', ticketId);
    mainStore.dispatch({
      type: 'DELETE_TICKET',
      payload: {
        id: ticketId
      }
    });
  }

  return(
    <>
    <div className="ticket-container">
      {name && priority &&
        <div>
          <span>{name}</span>
          <span className="priority">
            {
              <span>{priorityLevel}</span>
            }
          </span>

        <span className="close" onClick={deleteTicket}>x</span>
        </div>
      }
      <br />
      <div>
        {description}
      </div>
    </div>
    </>
  );
}

export default TicketComponent;