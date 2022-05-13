import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { addtodoAction, deleteTodo } from "../redux/action/todoAction";

export const Todolist = () => {
  const dispatch = useDispatch();
  const showlistData = useSelector((state) => state.TodoReducer.listData);
  console.log(showlistData);
  const [addtodo, setAddtodo] = useState("");

  const [strikeThrough, setstrikeThrough] = useState([]);
  const [taskDone, setTaskDone] = useState(false);

  const handleInput = (e) => {
    const value = e.target.value;
    setAddtodo(value);
  };
  const onFormSubmit = (e) => {
    e.preventDefault();
    dispatch(addtodoAction(addtodo), setAddtodo(""));
  };
  const taskstrikeThrough = (event, index) => {
    if (event.target.checked) {
      setstrikeThrough("strike");
      setTaskDone(true);
    } else {
      setstrikeThrough(" ");
      setTaskDone(false);
    }
  };
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-5 todolist_app">
          <h2>Add TODO</h2>
          <div>
            <form onSubmit={onFormSubmit}>
              <div className="form-group">
                <input
                  className="form-control"
                  placeholder=" "
                  type="text"
                  name="title"
                  value={addtodo}
                  onChange={handleInput}
                />
                <button className="btn btn-lg addtodo btn-none" type="submit">
                  ADD TODO
                </button>
              </div>
            </form>
            <div className="container">
              {showlistData.map((elem, idx) => {
                return (
                  <div className="row align-items-center form-group" key={idx}>
                    <input
                      className="col-1 text-start"
                      type="checkbox"
                      name="list"
                      onClick={taskstrikeThrough}
                    />
                    <label className={`col text-start ${strikeThrough}`}>
                      {elem.data}
                    </label>
                    <MdDelete
                      className="col-2 text-end delete"
                      onClick={() => dispatch(deleteTodo(elem.id))}
                    />
                    <hr />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
