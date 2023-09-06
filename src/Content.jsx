import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";

export function Content() {
  return (
    <div>
      <Signup />
      <Login />
      <LogoutLink />
    </div>
  );
}
