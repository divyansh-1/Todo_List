import React from 'react'
import "./Front.css"

export default function Front() {
  return (
    <div className="todo">
    <div className="heading">
        <h1>Todo List</h1>
    </div>
    <div className="todo-wrapper">
        <div className="todo-input">
          <div className="input-lable">
            <label>Title</label>
            <input type="text" placeholder="Title Goes Here...." />
          </div>
          <div className="input-lable">
            <label>Description</label>
            <input type="text" placeholder="Description Goes Here...." />
          </div>
          <div className="add-button">
            <button type="button" className="default-btn">
              Add task
            </button>
          </div>
        </div>
        <div className="btn-area">
          <button>Todo</button>
          <button>Completed</button>
        </div>
        <div className="todo-list">
          <h3>Task 1</h3>
          <p>Description</p>
          <button>Removed</button>
          <button>Completed</button>
        </div>
      </div>
    </div>
  )
}
