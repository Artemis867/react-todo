import React, { useEffect, useState } from "react";
import { useStore } from "react-redux";
import { TicketState } from "../../mock/ticket.mock";
import Select from 'react-select';

const categories = [
  { value: 1, label: 'research' },
  { value: 2, label: 'coding' },
  { value: 3, label: 'setup' },
]

function FormComponent(props: any): any {
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

    let newId = Math.floor((Math.random() * 9999999) + 1);
    console.log('id: ', newId);
    mainStore.dispatch({
      type: 'ADD_TICKET',
      payload: {...task, ticketId: newId}
    });
    setTask({...task, ticketId: newId});
    props.setShow(false);
  }

  return(
    <>
      <div className="form-task-container">
        <form onSubmit={addTask}>
          <div className="form-group">
            <label className="label">Task </label>
            <input type="text" value={task.name} onChange={handleNameChange}/>
          </div>
          <div className="form-group">
            <label className="label">Category </label>
            <Select
              name="category"
              isMulti
              options={categories}
              className="basic-multi-select"
              classNamePrefix="select"
              onChange={handleCategoryChange}
            />
          </div>
          <div className="form-group">
            <label className="label">Description</label>
            <textarea value={task.description} onChange={handleDescriptionChange}></textarea>
          </div>
          <div className="form-group">
            <label className="label">Priority</label>
            <select value={task.priority} onChange={handlePrioChange}>
              <option value="1">Highest</option>
              <option value="2">Normal</option>
              <option value="3">Lowest</option>
            </select>
          </div>
          <input type="submit" value="Save Task"/>
        </form>
      </div>
    </>
  );
}

export default FormComponent;