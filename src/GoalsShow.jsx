/* eslint-disable react/prop-types */
import { AwesomeButton } from "react-awesome-button";
import AwesomeButtonStyles from "react-awesome-button/src/styles/styles.scss";

export function GoalsShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateGoal(props.goal.id, params, () => event.target.reset());
    window.location.href = "/goals";
  };

  const handleClick = () => {
    props.onDestroyGoal(props.goal);
  };

  return (
    <div>
      <h1>Goal Details</h1>
      <hr />
      <p>Title: {props.goal.title}</p>
      <p>Description: {props.goal.description}</p>
      <p>Goal Type: {props.goal.goal_type}</p>
      <p>Completed (True or False): {String(props.goal.completed).charAt(0).toUpperCase()}</p>
      <form onSubmit={handleSubmit}>
        <div>
          Title: <input className="form-control" defaultValue={props.goal.title} name="title" type="text" />
        </div>
        <div>
          Description: <textarea className="form-control" defaultValue={props.goal.description} name="description" />
        </div>
        <div>
          Goal Type:
          <select className="form-control" defaultValue={props.goal_type} name="goal_type" id="goal_type">
            <option value="Daily">Daily</option>
            <option value="Weekly">Weekly</option>
            <option value="Monthly">Monthly</option>
            <option value="Yearly">Yearly</option>
          </select>
        </div>
        <div>
          Completion Status:
          <select className="form-control" defaultValue={props.goal.completed} name="completed" id="completed">
            <option value="true">True</option>
            <option value="false">False</option>
          </select>
        </div>
        <br />
        <AwesomeButton cssModule={AwesomeButtonStyles} type="primary">
          Update goal
        </AwesomeButton>
        {/* <button type="submit">Update goal!</button> */}
      </form>
      <AwesomeButton onPress={handleClick} cssModule={AwesomeButtonStyles} type="danger">
        Delete Goal
      </AwesomeButton>
      {/* <button onClick={handleClick}>Delete Goal</button> */}
    </div>
  );
}
