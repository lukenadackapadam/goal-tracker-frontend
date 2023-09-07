import axios from "axios";
import { useState, useEffect } from "react";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import { GoalsNew } from "./GoalsNew";
import { GoalsIndex } from "./GoalsIndex";
import { GoalsShow } from "./GoalsShow";
import { Modal } from "./Modal";

export function Content() {
  const [goals, setGoals] = useState([]);
  const [isGoalsShowVisible, setIsGoalsShowVisible] = useState(false);
  const [currentGoal, setCurrentGoal] = useState({});

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

  const handleShowGoal = (goal) => {
    console.log("handleShowGoal", goal);
    setIsGoalsShowVisible(true);
    setCurrentGoal(goal);
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsGoalsShowVisible(false);
  };

  return (
    <div>
      <Signup />
      <Login />
      <LogoutLink />
      <GoalsNew onCreateGoal={handleCreateGoal} />
      <GoalsIndex goals={goals} onShowGoal={handleShowGoal} />
      <Modal show={isGoalsShowVisible} onClose={handleClose}>
        <GoalsShow goal={currentGoal} />
      </Modal>
    </div>
  );
}
