import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'

export default class App extends Component {
  state = {
    todos: [{id: '001', name: '吃饭', isEnd: false},{id: '002', name: '睡觉', isEnd: false},{id: '003', name: '打代码', isEnd: true}]
  }
  
  addTodo = (todo) => {
    const { todos } = this.state  
    this.setState({todos: [todo, ...todos]})
  }

  deleteTodo = (id) => {
    const { todos } = this.state
    const newTodos = todos.filter((todo) => {
      return todo.id !== id
    })
    this.setState({todos: newTodos})
  }

  changeTodo = (todo) => {
    const { todos } = this.state
    const newTodos = todos.map((cur) => {
      if(cur.id === todo.id) return todo
      else return cur 
    })
    this.setState({todos: newTodos})
  }

  choiceAllTodo = (isChecked) => {
    const { todos } = this.state
    const newTodos = todos.map((todo) => {
      return {...todo, isEnd: isChecked}
    })
    console.log(newTodos)
    this.setState({todos: newTodos})
  }

  clearAllChoice = () => {
    const { todos } = this.state
    const newTodos = todos.map((todo) => {
      return {...todo, isEnd: false}
    })
    this.setState({todos: newTodos})
  }

  render() {
    return (
      <div id="root">
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo}/>
          <List todos={this.state.todos} deleteTodo={this.deleteTodo} changeTodo={this.changeTodo}/>
          <Footer todos={this.state.todos} choiceAllTodo={this.choiceAllTodo} clearAllChoice={this.clearAllChoice}/>
        </div>
      </div>
    </div>
    )
  }
}
