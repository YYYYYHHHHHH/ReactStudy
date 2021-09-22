import React, { Component } from 'react'
import './index.css'

export default class index extends Component {
  state = {
    mouse: false
  }
  

  mouseEnter = () => {
    this.setState({mouse: true})
  }

  mouseLeave = () => {
    this.setState({mouse: false})
  }

  deleteTodo = (id) => {
    const { deleteTodo } = this.props
    return () => {
      deleteTodo(id)
    }
  }

  changeTodo = (id, name) => {
    const { changeTodo } = this.props
    return (event) => {
      const todo = {name: name, id: id, isEnd: event.target.checked}
      changeTodo(todo)
    }
  }
  render() {
    const { mouse } = this.state
    const { id, isEnd, name} = this.props
      return (
        <li onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave} style={{background: mouse ? '#ddd' : '#fff'}}>
          <label>
            <input type="checkbox" checked={isEnd} onChange={this.changeTodo(id, name)}/>
            <span>{name}</span>
          </label>
          <button onClick={this.deleteTodo(id)} className="btn btn-danger" style={{display: mouse ? 'block' : 'none'}}>删除</button>
        </li>
      )
    }
}
