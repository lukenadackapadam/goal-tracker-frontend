/* eslint-disable react/prop-types */
export function GoalsIndex(props) {
  return (
    <div id="index">
      <h1>All Goals</h1>
      {props.goals.map((goal) => (
        <div key={goal.id}>
          <h2>{goal.title}</h2>
          {/* <p>Description: {goal.description}</p>
          <p>Type of Goal: {goal.goal_type}</p>
          <p>Completed (True or False): {String(goal.completed).charAt(0).toUpperCase()}</p> */}
          <button onClick={() => props.onShowGoal(goal)}>More Info</button>
        </div>
      ))}
    </div>
  );
}
