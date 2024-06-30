import React, { Component } from 'react'
import { v4 as uuid } from 'uuid';
import PropTypes from 'prop-types'
import './index.css'

export default class Header extends Component {
  static propTypes = {
    addTodo:PropTypes.func.isRequired
  }
  keyHandle = (event)=>{
    // 獲取keyCode和target
    const {keyCode, target} = event
    // 自props中獲取sendData方法
    const {addTodo} = this.props
    // 如果按下的不是Enter則直接返回
    if(keyCode !== 13 || target.value === '') return
    // 新增一個todoObj
    const todoObj = {id:uuid(), name:target.value, done:false}
    // 透過sendData方法回傳到父組件App
    addTodo(todoObj)
    // 將輸入框清空
    target.value = ''
  }
  render() {
    return (
      <div className="todo-header">
        <input type="text" placeholder="請輸入你的任務名稱，按Enter键确认" onKeyUp={this.keyHandle}/>
      </div>
    )
  }
}
