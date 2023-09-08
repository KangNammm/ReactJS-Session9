import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuid } from "uuid";
import { act_add, act_check, act_delete } from "./action/action";
export default function Todo() {
  const dispatch = useDispatch();
  const [job, setJob] = useState("");

  const listJob = useSelector((job) => job.todoList);

  const handleAddTodo = () => {
    const newTodo = {
      id: uuid(),
      name: job,
      status: false,
    };
    dispatch(act_add(newTodo));
    setJob("");
  };

  const handleDelete = (id) => {
    dispatch(act_delete(id));
  };

  const handleCheck = (id) => {
    console.log(id);
    dispatch(act_check(id));
  };

  return (
    <div>
      <div className="d-flex gap-2 mb-3">
        <input
          type="text"
          className="form-control"
          value={job}
          onChange={(e) => setJob(e.target.value)}
        />
        <button onClick={handleAddTodo} className="btn btn-primary">
          Add
        </button>
      </div>
      <ul className="list-group">
        {listJob.map((job) => (
          <li className="list-group-item d-flex justify-content-between mb-3">
            <div className="d-flex gap-2 align-items-center">
              <input
                type="checkbox"
                className="form-check-input"
                onClick={() => handleCheck(job.id)}
                // checked={job.status === true}
              />
              {job.status === true ? (
                <>
                  <s>{job.name}</s>
                </>
              ) : (
                <>
                  <span>{job.name}</span>
                </>
              )}
            </div>
            <button
              className="btn btn-danger"
              onClick={() => handleDelete(job.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
