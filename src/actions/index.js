import { FETCH_TODOS } from './types';
import { todosRef } from '../config/firebase';

export const addToDo = newTodo => async dispatch => {
  todosRef.push().set(newTodo);
}

export const completeToDo = completeToDoId => async dispatch => {
  todosRef.child(completeToDoId).remove();
}

export const fetchToDos = () => async dispatch => {
  todosRef.on('value', snapshot => {

    console.log(snapshot);
    dispatch({
      type: FETCH_TODOS,
      payload: snapshot.val()
    })
  })
}
