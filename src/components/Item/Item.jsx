import React, { Component } from 'react'

import './Item.css'

export default class Item extends Component {

    state = { mouse: false }

    //鼠标是否在Item上的回调函数
    handleMouse = (flag) => {
        return () => {
            this.setState({ mouse: flag })
        }
    }

    //更改做完与否选择框
    handleCheck = (id) => {
        return (event) => {
            this.props.updateTodo(id, event.target.checked)
        }
    }

    //删除此条项目
    handleDelete = (id) => {
        return (event) => {
            this.props.deleteTodo(id)
        }
    }

    render() {
        const { todo } = this.props
        const { mouse } = this.state
        return (
            <li style={{ backgroundColor: mouse ? '#ddd' : 'white' }} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
                <label>
                    <input type="checkbox" checked={todo.done} onChange={this.handleCheck(todo.id)} />
                    <span>{todo.name}</span>
                </label>
                <button onClick={this.handleDelete(todo.id)} className="btn btn-danger" style={{ display: mouse ? 'block' : 'none' }}>删除</button>
            </li>
        )
    }
}
