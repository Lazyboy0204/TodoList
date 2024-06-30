import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {
  handleCheckAll = (event)=>{
    const {checkAllTodo} = this.props
    checkAllTodo(event.target.checked)
  }
  handleClearAll = ()=>{
    const {clearAllDone} = this.props
    clearAllDone()
  }
  render() {
    const {todos} = this.props
    //已完成個數
    const doneCount = todos.reduce((pre, todoObj)=>{
      return pre + (todoObj.done ? 1 : 0)
    },0)
    //總數
    const total = todos.length
    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox" onChange={this.handleCheckAll} checked={total !==0 && doneCount===total ? true : false}/>
        </label>
        <span>
          <span>已完成{doneCount}</span> / 全部{total}
        </span>
        <button onClick={this.handleClearAll} className="btn btn-danger">清除已完成任務</button>
      </div>
    )
  }
}
