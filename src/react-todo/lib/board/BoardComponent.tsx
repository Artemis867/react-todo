import React from "react";
import { sections } from "../../config/sections";
import { BoardProps, BoardState } from "../../interface/board.interface";
import MockTicketData from "../../mock/ticket.mock";
import TicketListComponent from "../ticket-list/TicketListComponent";

const mockTicketData$ = {ticketData: MockTicketData};
function BoardComponent() {
  return(
    <>
      <div className="board-container">
        <div className="board-sections">
          {
            sections
            .sort()
            .map((res, i)=> <div className="board-section" key={i}>{res.name}</div>)
          }
        </div>
        <div className="task-container">
          <div className="todo-task-container">
            <TicketListComponent mockTicket={mockTicketData$}/>
          </div>
          <div className="in-progess-container">
            <TicketListComponent mockTicket={[]}/>
          </div>
          <div className="done-container">
            <TicketListComponent mockTicket={[]}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default BoardComponent;