import React from "react";

const List = (props) => {
  return (
    <>
      <ul className="itemContainer">
        {props.todoList.map((list, ind) => (
          <li className="listItem" key={ind}>
            {list.task}
            <span></span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default List;
