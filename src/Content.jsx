import axios from "axios";
import { useState, useEffect } from "react";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import { GoalsNew } from "./GoalsNew";
import { GoalsIndex } from "./GoalsIndex";

export function Content() {
  const [goals, setGoals] = useState([]);

  const handleIndexGoals = () => {
    console.log("handleIndexGoals");
    axios.get("http://localhost:3000/goals.json").then((response) => {
      console.log(response.data);
      setGoals(response.data);
    });
  };

  useEffect(handleIndexGoals, []);

  const handleCreateGoal = (params, successCallback) => {
    console.log("handleCreateGoal", params);
    axios.post("http://localhost:3000/goals.json", params).then((response) => {
      setGoals([...goals, response.data]);
      successCallback();
    });
  };

  return (
    <div>
      <Signup />
      <Login />
      <LogoutLink />
      <GoalsNew onCreateGoal={handleCreateGoal} />
      <GoalsIndex goals={goals} />
    </div>
  );
}
