import React from 'react'

const Footer = (props) => {

  return (
    <footer>
      {props.length ? `You have ${props.length} ${props.length > 1 ? `tasks` : `task`}` : "You don't have any tasks"}
    </footer>
  )
}

export default Footer