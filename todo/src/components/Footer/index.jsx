import React, { Component } from 'react'
import './index.css'

export default class index extends Component {
    choiceAllTodo = (event) => {
      this.props.choiceAllTodo(event.target.checked)
    }
    
    clearAllChoice = () => {
      this.props.clearAllChoice()
    }
    render() {
      const { todos } = this.props
      const all = todos.length
      const end = todos.reduce((pre, cur) => {
        return pre + (cur.isEnd ? 1 : 0)
      }, 0)
        return (
            <div className="todo-footer">
            <label>
              <input type="checkbox" checked={all === end && all !== 0} onChange={this.choiceAllTodo}/>
            </label>
            <span>
              <span>已完成{end}</span> / 全部{all}
            </span>
            <button onClick={this.clearAllChoice} className="btn btn-danger">清除已完成任务</button>
          </div>
        )
    }
}
