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
          Title: <input name="title" type="text" />
        </div>
        <div>
          Description: <textarea name="description" />
        </div>
        <div>
          Goal Type:
          <select name="goal_type" id="goal_type">
            <option value="Daily">Daily</option>
            <option value="Weekly">Weekly</option>
            <option value="Monthly">Monthly</option>
            <option value="Yearly">Yearly</option>
          </select>
        </div>
        <div>
          Completion Status:
          <select name="completed" id="completed">
            <option value="True">True</option>
            <option value="False">False</option>
          </select>
        </div>
        <button type="submit">Create goal!</button>
      </form>
    </div>
  );
}
