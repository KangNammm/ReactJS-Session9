import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuid } from "uuid";
import { act_add, act_delete, act_check } from "../actions/actionType";
export default function TodoList() {
  const dispatch = useDispatch();
  const [job, setJob] = useState("");
  // lấy dữ liệu từ store
  const listJob = useSelector((job) => job.todoList);
  // hàm gửi action kèm payload lên reducer
  const handleAddTodo = () => {
    const newJob = {
      id: uuid(),
      name: job,
      status: false,
    };
    dispatch(act_add(newJob));
    setJob("");
  };

  const handleDelete = (id) => {
    dispatch(act_delete(id)); // gửi dispatch lên reducer
  };

  const handleCheck = (id) => {
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
                onChange={() => handleCheck(job.id)}
                checked={job.status === true}
              />
              {job.status === false ? (
                <>
                  <span>{job.name}</span>
                </>
              ) : (
                <>
                  <s>{job.name}</s>
                </>
              )}
            </div>
            <button
              onClick={() => handleDelete(job.id)}
              className="btn btn-danger"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
