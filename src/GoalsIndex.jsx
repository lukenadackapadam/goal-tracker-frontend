/* eslint-disable react/prop-types */
export function GoalsIndex(props) {
  return (
    <div id="index">
      <h1>All Goals</h1>
      {props.goals.map((goal) => (
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
