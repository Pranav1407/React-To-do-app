import React from "react"
import Tasks from "./Tasks";


const Content = (props) => {

    return( 
        <main>
            {props.items.length ? (
                <Tasks 
                    items = {props.items} 
                    handleCheck = {props.handleCheck} 
                    handleDelete = {props.handleDelete}
                />
            ) : "Your List is Empty"}
        </main>
    );
}

export default Content