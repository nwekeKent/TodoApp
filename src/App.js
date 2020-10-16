import React, {Component} from 'react';
import Todos from './Todos'
import AddTodo from './addTodo'

  class App extends Component {
  state ={
    todos: [
      {
        id:1, content:'learn react'
      },
       {
        id:2, content:'learn more react'
      }
    ]
      }

    deleteTodo = (id) => {
      const todos = this.state.todos.filter(todo => {
            return todo.id !== id

      })

      this.setState({
        todos:todos
      })
    }

    addTodo = (todo) => {
      todo.id = Math.random();
      let todos = [...this.state.todos, todo];
      this.setState({
        todos:todos
      })

    }
  render() {
    return (
      <div className="App container my-5 ">
        <div className='container text-center'>
          <h1 className='display-4 py-3 text-success'>Do-It</h1>
        </div>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo}/>
      </div>


      )

  }

}

export default App;
