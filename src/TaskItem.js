import React from 'react'
import { FaTrashAlt } from "react-icons/fa"

const TaskItem = (props) => {
  return (
    <li className="item">
        <input type="checkbox" checked = {props.item.checked} onChange={ () => {props.handleCheck(props.item.id)}}/>
        <label onDoubleClick={() =>{props.handleCheck(props.item.id)}}>{props.item.item}</label>
        <FaTrashAlt role="button" tabIndex="0" aria-label = {`Delete ${props.item.item}`} onClick={ () => {props.handleDelete(props.item.id)}}/>
    </li>
  )
}

export default TaskItem