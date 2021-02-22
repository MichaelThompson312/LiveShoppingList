import React, { useState } from "react";
import "./App.css";
import Item from "./Components/Item";
import { v4 as uuidv4 } from 'uuid';


const arr = () => {
  let data = localStorage.getItem("data");
  if (data) return JSON.parse(localStorage.getItem("data"));
  else return [];
};

function App() {
  const [item, setItem] = useState("");
  const [list, setList] = useState(arr);

  const handleSubmit = (e) => {
    const newItem = {
      id: uuidv4(),
      item: item,
      store: e.target[1].value,
      complete: false,
    };
    console.log(newItem);
    e.preventDefault();
    if (item && item.length <= 25) {
      setList([...list, newItem]);
      setItem("");
    }
  };

  const handleChange = (e) => {
    setItem(e.target.value);
  };

  return (
    <div className="App">
      <h1>Grocery List</h1>
      <form onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          value={item}
          placeholder="Enter the items"
          onChange={handleChange}
        />
        <input
          className="input"
          type="text"
          value={item.store}
          placeholder="Specific store?"  
        />
        <button className="btn" type="submit">
          Add Items
        </button>
        <br></br>
        <br></br>
      </form>
      <div>
        {list.map((c, id) => (
          <Item
            key={id}
            id={c.id}
            item={c.item}
            store={c.store}
            list={list}
            setList={setList}
            complete={c.complete}
            setItem={setItem}
          />
        ))}
      </div>
    </div>
  );
}

export default App;