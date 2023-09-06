export function GoalsNew() {
  return (
    <div id="goals-new">
      <h1>Create Goal</h1>
      <form>
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
          <input type="checkbox" id="true" name="true" />
          <label>Completed</label>
          <input type="checkbox" id="false" name="false" />
          <label>In Progress</label>
        </div>
        <button type="submit">Create goal!</button>
      </form>
    </div>
  );
}
