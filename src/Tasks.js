import React from 'react'
import TaskItem from './TaskItem'


const Tasks = (props) => {
  return (
    <ul>
        {props.items.map((item) => (
            <TaskItem 
                item = {item}
                key = {item.id}
                handleCheck = {props.handleCheck} 
                handleDelete = {props.handleDelete}
            />
        ))}
    </ul>
  )
}

export default Tasks