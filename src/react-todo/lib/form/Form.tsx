import React, { useEffect, useState } from "react";
import { useStore } from "react-redux";
import { TicketState } from "../../mock/ticket.mock";

function FormComponent(): any {  
  const [task, setTask] = useState(TicketState);
  const mainStore = useStore();

  useEffect(() => {
  }, [task]);

  function handleNameChange(event: any) {
    setTask({...task, name: event.target.value});
  }

  function handleDescriptionChange(event: any) {
    setTask({...task, description: event.target.value})
  }
  
  function handlePrioChange(event: any) {
    setTask({...task, priority: event.target.value});
  }

  function addTask(event: any) {
    event.preventDefault();
    mainStore.dispatch({
      type: 'ADD_TICKET',
      payload: task
    });
  }

  return(
    <>
      <div>
        <form onSubmit={addTask}>
          <label>Task </label>
          <input type="text" value={task.name} onChange={handleNameChange}/>
          <br/>
          <label htmlFor="">Description</label>
          <textarea value={task.description} onChange={handleDescriptionChange}></textarea>
          <br/>
          <label htmlFor="">Priority </label>
          <select value={task.priority} onChange={handlePrioChange}>
            <option value="1">Highest</option>
            <option value="2">Normal</option>
            <option value="3">Lowest</option>
          </select>
          <br/>
          <input type="submit" value="Save Task"/>
        </form>
      </div>
    </>
  );
}

export default FormComponent;