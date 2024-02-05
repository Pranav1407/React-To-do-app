import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import { useState } from "react";
import NewTask from "./NewTask";
import SearchTask from "./SearchTask";


function App() {

  const [items,setItems] = useState(JSON.parse(localStorage.getItem("To-do List")) || [])

    const [NewItem, setNewItem] = useState('')
    const [searchItem,setsearchItem] = useState('')

    const addItem = (item) => {
      const id = items.length ? items[items.length - 1].id + 1 : 1
      const addNewItem = {id,checked:false,item}
      const listItems = [...items,addNewItem]
      setItems(listItems)
      localStorage.setItem("To-do List",JSON.stringify(listItems))
    }

    const handleCheck = (id) => {
        const listItems = items.map( (item) => item.id === id ? {...item, checked:!item.checked} : item)
        setItems(listItems)
        localStorage.setItem("To-do List",JSON.stringify(listItems))
    }

    const handleDelete = (id) => {
        const listItems = items.filter( (item) => item.id !== id)
        setItems(listItems)
        localStorage.setItem("To-do List",JSON.stringify(listItems))
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      if(!NewItem) {return}
      addItem(NewItem)
      setNewItem('')
    }

  return (
    <div className="App">
      <Header />
      <SearchTask 
        searchItem = {searchItem}
        setsearchItem = {setsearchItem}
      />
      <NewTask 
        NewItem = {NewItem}
        setNewItem = {setNewItem}
        handleSubmit = {handleSubmit}
      />
      <Content 
        items = {items.filter((item) => ((item.item).toLowerCase()).includes(searchItem.toLowerCase()))} 
        handleCheck = {handleCheck} 
        handleDelete = {handleDelete}
      />
      <Footer length = {items.length}/>
    </div>
  );
}

export default App;
