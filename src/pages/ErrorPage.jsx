import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <h1>
      Error{" "}
      <Link className="btn" to={".."} relative="route">
        Home
      </Link>
    </h1>
  );
}
