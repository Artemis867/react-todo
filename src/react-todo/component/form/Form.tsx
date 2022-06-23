import React from "react";
import { FormState } from '../../interface/form.interface';
import { FormProps } from '../../interface/form.interface';
import { store } from "../../lib/ticket-list/TicketListComponent";

class FormComponent extends React.Component<FormProps, FormState> {

  constructor(props: any) {
    super(props);
    this.state = {
      ticketId: 7,
      name: '',
      description: '',
      type: 'coding',
      status: 'todo',
    }
    this.handleTaskNameChange = this.handleTaskNameChange.bind(this);
    this.handleSelectorChange = this.handleSelectorChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.addTask = this.addTask.bind(this);

  }

  componentDidUpdate() {
  }

  handleTaskNameChange(event: any) {
    this.setState({...this.state, name: event.target.value});
  }

  handleDescriptionChange(event: any) {
    this.setState({...this.state, description: event.target.value});
  }

  handleSelectorChange(event: any) {
    this.setState({...this.state, priority: event.target.value });
  }

  addTask(event: any) {
    event.preventDefault();
    store.dispatch({
      type: 'ADD_TICKET',
      payload: this.state
    });
  }

  render() {
    return(
      <>
        <div>
          <form onSubmit={this.addTask}>
            <label>Task </label>
            <input type="text" value={this.state.name} onChange={this.handleTaskNameChange}/>
            <br/>
            <label htmlFor="">Description</label>
            <textarea value={this.state.description} onChange={this.handleDescriptionChange}></textarea>
            <br/>
            <label htmlFor="">Priority </label>
            <select onChange={this.handleSelectorChange}>
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
}

export default FormComponent;