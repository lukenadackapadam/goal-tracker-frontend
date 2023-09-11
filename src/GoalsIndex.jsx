/* eslint-disable react/prop-types */
import { useState } from "react";

export function GoalsIndex(props) {
  const [searchFilter, setSearchFilter] = useState("");
  console.log(props);

  return (
    <div id="index">
      <h1>All Goals</h1>
      Search:{" "}
      <input
        className="form-control"
        type="text"
        value={searchFilter}
        onChange={(event) => setSearchFilter(event.target.value)}
        list="titles"
      />
      <br />
      {props.goals
        .filter((goal) => goal.title.toLowerCase().includes(searchFilter.toLowerCase()))
        .map((goal) => (
          <div key={goal.id}>
            <div className="card">
              <div className="card-body">
                <h2 className="card-title">{goal.title}</h2>
                <button onClick={() => props.onShowGoal(goal)}>More Info</button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
