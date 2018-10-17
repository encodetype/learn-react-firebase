import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { completeToDo } from '../actions';
import styled from 'styled-components';


class ToDoListItem extends Component{
  handleCompleteClick = completeToDoId => {
    const { completeToDo } = this.props;

    completeToDo(completeToDoId);
  }

  render(){

    const HBig = styled.span`
      color: #4E503B;
    `;

    const { todoId, todo } = this.props;
    return (
      <div key="toDoName" className="col s10 offset-s1 to-do-list-item teal">
        <h4>
          <HBig>{todo.title}{" "}</HBig>
          <span
            onClick={() => this.handleCompleteClick(todoId)}
            className="complete-todo-item waves-effect waves-light teal lighten-5 teal-text text-darken-4 btn"
          >
            <i className="large material-icons">done</i>
          </span>
        </h4>
      </div>
    );
  }
}


export default connect(null,{ completeToDo })(ToDoListItem);
