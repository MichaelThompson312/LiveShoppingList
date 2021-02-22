import React from "react";
import "./Item.css";

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
    <div className="item">
      <input
        type="text"
        value={item}
        style={{
          border: "none",
          outline: "none",
          backgroundColor: "transparent",
          color: "white",
          fontSize: "20px",
        }}
        onChange={handleItem}
        className={complete ? "complete" : ""}
      />
      <input
        type="text"
        value={store}
        style={{
          border: "none",
          outline: "none",
          backgroundColor: "transparent",
          color: "white",
          fontSize: "20px",
        }}
        onChange={handleItem}
        className={complete ? "complete" : ""}
      />
      <img
        onClick={() => handleComplete(id)}
        src="https://img.icons8.com/offices/40/000000/checked-2--v2.png"
        alt="complete task"
      />
      <img
        onClick={() => remove(id)}
        src="https://img.icons8.com/color/48/000000/trash.png"
        alt="Delete"
      />
    </div>
  );
};
export default Item;