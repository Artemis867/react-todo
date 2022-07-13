import { faNoteSticky, faStickyNote } from "@fortawesome/free-regular-svg-icons";
import { faBook, faCheckCircle, faCode, faTerminal } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useStore } from "react-redux";

interface Ticket {
  ticketId: number,
  name: string,
  priority?: number,
  category?: Object[],
  description?: string,
  status: string,
}

const priorityList = [
  {level: 1, value: 'High'},
  {level: 2, value: 'Normal'},
  {level: 3, value: 'Low'}
];

function TicketComponent({ticketId, name, description, category, priority, status}: Ticket ): any {
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
          <span className={`priority ${priorityLevel}`}>{priorityLevel}</span>
          <br />
        {category &&
          category.map(({value, label}: any, i) => {
            if(value === 1) {
              return <FontAwesomeIcon key={i} className="fa-icon" icon={faNoteSticky}/>
            }
            if(value === 2) {
              return <FontAwesomeIcon key={i} className="fa-icon" icon={faCode}/>
            }
            if(value === 3) {
              return <FontAwesomeIcon key={i} className="fa-icon" icon={faTerminal}/>
            }
          })
        }
        { status === 'done' ?
          <FontAwesomeIcon className="close" icon={faCheckCircle}/> 
          : <span className="close" onClick={deleteTicket}>x</span>
        }
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