import React, { Component } from 'react'

import './App.css'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import List from './components/List/List'

export default class App extends Component {

  state = {
    todos: [
      { id: '001', name: 'Java', done: true },
      { id: '002', name: 'Python', done: false },
      { id: '003', name: 'React', done: false },
    ]
  }

  addTodo = (todoObj) => {
    const { todos } = this.state
    const newTodos = [todoObj, ...todos]
    this.setState({ todos: newTodos })
  }

  //更新做完与否状态
  updateTodo = (id, done) => {
    //获取原始数据
    const { todos } = this.state
    //遍历
    const newTodos = todos.map((todoObj) => {
      if (todoObj.id === id) {
        return { ...todoObj, done: done }
      } else {
        return todoObj
      }
    })
    //更新state数据
    this.setState({ todos: newTodos })
  }

  //删除数据
  deleteTodo = (id) => {
    //获取原始数据
    const { todos } = this.state
    //遍历
    const newTodos = todos.filter((todoObj) => {
      return todoObj.id !== id
    })
    //更新state数据
    this.setState({ todos: newTodos })
  }

  selectAll = (done) => {
    //获取原始数据
    const { todos } = this.state
    //遍历
    const newTodos = todos.map((todoObj) => {
      return { ...todoObj, done: done }
    })
    this.setState({ todos: newTodos })
  }

  clearAllDone = () => {
    //获取原始数据
    const { todos } = this.state
    //遍历
    const newTodos = todos.filter((todoObj) => {
      return todoObj.done === false
    })
    this.setState({ todos: newTodos })
  }

  render() {
    const { todos } = this.state
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo} />
          <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} />
          <Footer selectAll={this.selectAll} todos={todos} clearAllDone={this.clearAllDone} />
        </div>
      </div>
    )
  }
}
