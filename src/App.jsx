import React, { Component } from 'react'
import './App.css'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'

export default class App extends Component {
  //初始化狀態
  state = {todos:[
    {id:'001',name:'吃飯',done:true},
    {id:'002',name:'睡覺',done:true},
    {id:'003',name:'逛街',done:false},
    {id:'004',name:'買菜',done:false},
  ]}
  addTodo = (todoObj)=>{
    // 取得當前狀態
    const {todos} = this.state
    // 將獲取的todoObj對象新增到列表最前方
    const newTodos = [todoObj, ...todos]
    // 設定新列表到狀態
    this.setState({todos:newTodos})
  }
  updateTodo = (id, done)=>{
    const {todos} = this.state
    const newTodos = todos.map((todoObj)=>{
      if(todoObj.id === id){
        return {...todoObj,done}
      }else{
        return todoObj
      }
    })
    this.setState({todos:newTodos})
  }
  deleteTodo = (id)=>{
    const {todos} = this.state
    // filter方法若return true則保留該todoObj, 反之則不將其加入列表
    const newTodos = todos.filter((todoObj)=>{
      return todoObj.id !== id
    })
    this.setState({todos:newTodos})
  }
  checkAllTodo = (done)=>{
    const {todos} = this.state
    const newTodos = todos.map((todoObj)=>{
      return {...todoObj, done}
    })
    this.setState({todos:newTodos})
  }
  clearAllDone = ()=>{
    const {todos} = this.state
    const newTodos = todos.filter((todoObj)=>{
      return todoObj.done !== true
    })
    this.setState({todos:newTodos})
  }
  render() {
    const {todos} = this.state
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo}/>
          <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
          <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone}/>
        </div>
      </div>
    )
  }
}
