import { nanoid } from 'nanoid'
import React, { Component } from 'react'
import './index.css'

export default class index extends Component {
    onKeyPress = (event) => {
        if(event.charCode !== 13) return
        if(event.target.value === '') alert('输入的值不能为空')
        let newTodo = {id: nanoid(), name: event.target.value, isEnd: false}
        this.props.addTodo(newTodo)
        event.target.value = ''
    }
    render() {
        return (
            <div className="todo-header">
                <input onKeyPress={this.onKeyPress} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
            </div>
        )
    }
}

