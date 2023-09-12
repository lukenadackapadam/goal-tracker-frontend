import axios from "axios";
import { useState } from "react";
import { AwesomeButton } from "react-awesome-button";
import AwesomeButtonStyles from "react-awesome-button/src/styles/styles.scss";

export function Signup() {
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/user.json", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
        window.location.href = "/login";
      })
      .catch((error) => {
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
      });
  };

  return (
    <div id="signup">
      <h1>Signup</h1>
      <hr />
      <ul>
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <div>
          First Name: <input className="form-control" name="first_name" type="text" required />
        </div>
        <div>
          Last Name: <input className="form-control" name="last_name" type="text" required />
        </div>
        <div>
          Email: <input className="form-control" name="email" type="email" required />
        </div>
        <div>
          Password: <input className="form-control" name="password" type="password" required />
        </div>
        <div>
          Confirm Password: <input className="form-control" name="password_confirmation" type="password" required />
        </div>
        <AwesomeButton cssModule={AwesomeButtonStyles} type="primary">
          Submit
        </AwesomeButton>
      </form>
    </div>
  );
}
