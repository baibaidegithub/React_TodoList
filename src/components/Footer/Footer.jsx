import React, { Component } from 'react'
import './Footer.css'

export default class Footer extends Component {

    handleSelectAll = (event) => {
        this.props.selectAll(event.target.checked)
    }

    deleteAllDone = () => {
        this.props.clearAllDone()
    }


    render() {

        const { todos } = this.props

        const doneCount = todos.reduce((pre, todo) => {
            return (pre + (todo.done ? 1 : 0))
        }, 0)

        const total = todos.length
        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox" onClick={this.handleSelectAll} />
                </label>
                <span>
                    <span>已完成{doneCount}</span> / 全部{total}
                </span>
                <button onClick={this.deleteAllDone} className="btn btn-danger">清除已完成任务</button>
            </div>
        )
    }
}
