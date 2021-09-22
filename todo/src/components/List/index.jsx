import React, { Component } from 'react'
import Item from '../Item'
import './index.css'

export default class index extends Component {
    render() {

        return (
        <ul className="todo-main">
          {this.props.todos.map((todo) => {
            return <Item key={todo.id} {...todo} deleteTodo={this.props.deleteTodo} changeTodo={this.props.changeTodo}/>
          })}
        </ul>
        )
    }
}
