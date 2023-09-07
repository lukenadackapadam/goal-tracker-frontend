/* eslint-disable react/prop-types */
export function GoalsIndex(props) {
  return (
    <div>
      <h1>All Goals</h1>
      {props.goals.map((goal) => (
        <div key={goal.id}>
          <h3>Goal {goal.id}</h3>
          <p>Description: {goal.description}</p>
          <p>Type of Goal: {goal.goal_type}</p>
          <p>Completed (True or False): {String(goal.completed)}</p>
        </div>
      ))}
    </div>
  );
}
