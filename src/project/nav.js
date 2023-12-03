import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="list-group">
    <Link
        to="/project/home"
        className="list-group-item list-group-item-action"
      >
        Home
      </Link>

      <Link
        to="/project/search"
        className="list-group-item list-group-item-action"
      >
        Search
      </Link>
      <Link
        to="/project/signin"
        className="list-group-item list-group-item-action"
      >
        SignIn
      </Link>
      <Link
        to="/project/signup"
        className="list-group-item list-group-item-action"
      >
        SignUp
      </Link>
      <Link
        to="/project/users"
        className="list-group-item list-group-item-action"
      >
        Users
      </Link>
      <Link
        to="/project/account"
        className="list-group-item list-group-item-action"
      >
        Account
      </Link>
    </div>
  );
}

export default Nav;