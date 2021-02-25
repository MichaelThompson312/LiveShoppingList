import React from "react";
import "./Item.css";
import CompleteImage from '../images/complete.png';
import DeleteImage from '../images/delete.png'

const Item = ({ id, item, store, list, setList, complete }) => {

//Removing the item from the list
  const remove = (id) => {
    setList(list.filter((el) => el.id !== id));
  };

//Setting the item to complete
  const handleComplete = (id) => {
    setList(
      list.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            ...store,
            complete: !item.complete,
          };
        }
        return item;
      })
    );
  };

 //Updating item within the list
  const handleItem = (e) => {
    if (e.target.value.length <= 25) {
      setList(
        list.map((el) => {
          if (el.id === id) {
            return {
              ...el,
              item: e.target.value,
            };
          }

          return el;
        })
      );
    }
  };

  return (
    <div className="item" >
      <input
        type="text"
        value={item}
        onChange={handleItem}
        className={complete ? "complete" : ""}
      />
      <input
        type="text"
        value={store}
        onChange={handleItem}
        className={complete ? "complete" : ""}
      />
      <img
        onClick={() => handleComplete(id)}
        src={CompleteImage}
        className="image"
        width="40" 
        height="40"
        alt="complete task"
      />
      <img
        onClick={() => remove(id)}
        src={DeleteImage} 
        width="40" 
        height="40"
        className="image"
        alt="Delete"
      />
    </div>
  );
};
export default Item;