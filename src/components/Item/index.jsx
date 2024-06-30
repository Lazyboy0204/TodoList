import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
  handleCheck = (id)=>{
    const {updateTodo} = this.props
    return (event)=>{
      updateTodo(id,event.target.checked)
    }
  }
  handleDelete = (id)=>{
    const {deleteTodo} = this.props
    if(window.confirm('確定刪除嗎？')){
      deleteTodo(id)
    }
  }
  render() {
    const {id,name,done} = this.props
    return (
      <li className="todo-item">
        <label>
          <input type="checkbox" checked={done} onChange={this.handleCheck(id)}/>
          <span>{name}</span>
        </label>
        <button className="btn btn-danger" style={{display:'none'}}  onClick={()=>{this.handleDelete(id)}}>删除</button>
      </li>
    )
  }
}
