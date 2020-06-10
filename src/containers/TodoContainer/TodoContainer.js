import React from 'react';
import { connect } from 'react-redux';
import { addTodo, removeTodo } from '../../redux';

const TodoContainer = (props) => {

  let formRef = null;
  let todo = null;

  const formSubmitHandler = (event) => {
    event.preventDefault();
    props.addTodo(todo);
    formRef.reset();
  }

  const todoList = props.todos.map(todo => {
    return (
      <li key={todo.id} className="list-group-item d-flex justify-content-between align-items-center">
        {todo.title}
        <span
          onClick = {() => props.removeTodo(todo.id)}
          style = {{fontSize: '20px', fontWeight: 'bold', cursor: 'pointer'}}
          className = "material-icons text-danger">
            clear
        </span>
      </li>
    );
  });

  return (
    <div style={{padding: '20px', textAlign: 'center'}} className="todoContainer">
      <h1>Todos</h1>
      <form ref={ref => formRef = ref} onSubmit={formSubmitHandler} style={{marginTop: '20px'}} autoComplete="off">
        <div style={{display: 'flex', justifyContent: 'center'}} className="form-row">
          <div className="form-group col-sm-6">
            <label htmlFor="input" className="sr-only">Password</label>
            <input
              onChange = {(event) => todo = event.target.value}
              style = {{width: '100%'}}
              type = "text"
              className = "form-control"
              id = "input"
              placeholder = "Enter Todo" required />
          </div>
          <div className="form-group"><button type="submit" className="btn btn-primary">Add Todo</button></div>
        </div>
      </form>
      <hr />
      { props.todos.length
        ? <ul style={{margin: '0 auto'}} className="list-group col-md-6">
            {todoList}
          </ul>
        : <h1>No Todos</h1>
      }
    </div>
  )
}

const mapStateToProps = state => {
  return {
    todos: state.todo.todos
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: (todo) => dispatch(addTodo(todo)),
    removeTodo: (id) => dispatch(removeTodo(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer);
