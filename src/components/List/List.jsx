import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Item from '../Item/Item'

import './List.css'

export default class List extends Component {

    //对接收的props进行数据类型限制
    static propTypes = {
        todos: PropTypes.array.isRequired,
        updateTodo:PropTypes.func.isRequired,
        deleteTodo:PropTypes.func.isRequired,
    }

    render() {
        const { todos, updateTodo, deleteTodo } = this.props
        return (
            <ul className="todo-main">
                {
                    todos.map((todo) => {
                        return <Item key={todo.id} todo={todo} updateTodo={updateTodo} deleteTodo={deleteTodo} />
                    })
                }
            </ul>
        )
    }
}
