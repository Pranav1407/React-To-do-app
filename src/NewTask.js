import React from 'react'
import { FaPlus } from 'react-icons/fa'

const NewTask = (props) => {
  return (
    <form className='addForm' onSubmit={props.handleSubmit}>
        <label htmlFor='addItem'>Add Task</label>
        <input autoFocus type="text" id = 'addItem' placeholder='Enter Your New Task' required value={props.NewItem} onChange={(e) => {props.setNewItem(e.target.value)}}/>
        <button type='submit' aria-label='Add Task'>
            <FaPlus/>
        </button>
    </form>
  )
}

export default NewTask