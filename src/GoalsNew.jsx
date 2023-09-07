/* eslint-disable react/prop-types */

export function GoalsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateGoal(params, () => event.target.reset());
  };
  return (
    <div id="goals-new">
      <h1>Create Goal</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Description: <textarea name="description" />
        </div>
        <div>
          Goal Type:
          <select name="goal_type" id="goal_type">
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option>
          </select>
        </div>
        <div>
          Completion Status:
          <select name="completed" id="completed">
            <option value="true">True</option>
            <option value="false">False</option>
          </select>
        </div>
        <button type="submit">Create goal!</button>
      </form>
    </div>
  );
}
