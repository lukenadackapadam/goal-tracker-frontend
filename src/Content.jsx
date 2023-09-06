import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import { GoalsNew } from "./GoalsNew";

export function Content() {
  return (
    <div>
      <Signup />
      <Login />
      <LogoutLink />
      <GoalsNew />
    </div>
  );
}
