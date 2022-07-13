import React, { useEffect, useState } from "react";
import { useStore } from "react-redux";
import { TicketState } from "../../mock/ticket.mock";
import Select from 'react-select';

const categories = [
  { value: 1, label: 'research' },
  { value: 2, label: 'coding' },
  { value: 3, label: 'setup' },
]

function FormComponent(): any {  
  const [task, setTask] = useState(TicketState);
  const mainStore = useStore();

  useEffect(() => {
  }, [task]);

  function handleNameChange(event: any) {
    setTask({...task, name: event.target.value});
  }

  function handleCategoryChange(selected: any) {
    setTask({...task, category: selected})
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
    setTask({...task, ticketId: Math.floor((Math.random() * 9999999) + 1)});
  }

  return(
    <>
      <div>
        <form onSubmit={addTask}>
          <label>Task </label>
          <input type="text" value={task.name} onChange={handleNameChange}/>
          <br/>
          <label>Category </label>
          <Select
            name="category"
            isMulti
            options={categories}
            className="basic-multi-select"
            classNamePrefix="select"
            onChange={handleCategoryChange}
          />
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