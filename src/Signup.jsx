import axios from "axios";
import { useState } from "react";

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
        window.location.href = "/";
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
          First Name: <input className="form-control" name="first_name" type="text" />
        </div>
        <div>
          Last Name: <input className="form-control" name="last_name" type="text" />
        </div>
        <div>
          Email: <input className="form-control" name="email" type="email" />
        </div>
        <div>
          Password: <input className="form-control" name="password" type="password" />
        </div>
        <div>
          Confirm Password: <input className="form-control" name="password_confirmation" type="password" />
        </div>
        <button type="submit">Submit!</button>
      </form>
    </div>
  );
}
