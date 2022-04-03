import React from "react";
import { sections } from "../../config/sections";
import { BoardProps, BoardState } from "../../interface/board.interface";
import TicketListComponent from "../ticket-list/TicketListComponent";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

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
        <DndProvider backend={HTML5Backend}>
          <TicketListComponent/>
        </DndProvider>
      </div>
    </>
  )
}

export default BoardComponent;