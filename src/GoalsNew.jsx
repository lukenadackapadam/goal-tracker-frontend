/* eslint-disable react/prop-types */
import { AwesomeButton } from "react-awesome-button";
import AwesomeButtonStyles from "react-awesome-button/src/styles/styles.scss";

export function GoalsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateGoal(params, () => event.target.reset());
    window.location.href = "/goals";
  };
  return (
    <div id="goals-new">
      <h1>Create Goal</h1>
      <hr />
      <form onSubmit={handleSubmit}>
        <div>
          Title: <input className="form-control" name="title" type="text" required />
        </div>
        <div>
          Description: <textarea className="form-control" name="description" required />
        </div>
        <div>
          Goal Type:
          <select className="form-control" name="goal_type" id="goal_type">
            <option value="Daily">Daily</option>
            <option value="Weekly">Weekly</option>
            <option value="Monthly">Monthly</option>
            <option value="Yearly">Yearly</option>
          </select>
        </div>
        <div>
          Completion Status:
          <select className="form-control" name="completed" id="completed">
            <option value="true">True</option>
            <option value="false">False</option>
          </select>
        </div>
        <br />
        <AwesomeButton cssModule={AwesomeButtonStyles} type="primary">
          Create Goal
        </AwesomeButton>
        {/* <button type="submit">Create goal!</button> */}
      </form>
    </div>
  );
}
