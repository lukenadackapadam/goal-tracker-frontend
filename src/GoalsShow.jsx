/* eslint-disable react/prop-types */
export function GoalsShow(props) {
  return (
    <div>
      <h1>Goal Details</h1>
      <p>Title: {props.goal.title}</p>
      <p>Description: {props.goal.description}</p>
      <p>Goal Type: {props.goal.goal_type}</p>
      <p>Completed (True or False): {String(props.goal.completed).charAt(0).toUpperCase()}</p>
    </div>
  );
}
