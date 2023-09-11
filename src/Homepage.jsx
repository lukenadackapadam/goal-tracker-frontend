import { Link } from "react-router-dom";

export function Homepage() {
  return (
    <div id="homepage">
      <h1 className="display-1">Goal Compass</h1>
      <hr />
      <br />
      <p>A simple goal tracking application to aid you in achieving any goal.</p>
      <p>
        <Link to="/signup">Signup</Link> or <Link to="/login">Login</Link> to get started.
      </p>
    </div>
  );
}
