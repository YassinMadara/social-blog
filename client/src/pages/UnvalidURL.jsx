import { Link } from "react-router-dom";

export default function UnvalidURL() {
  return (
    <h1>
      UnvalidURL - Go{" "}
      <Link className="btn" to={"/"}>
        Home
      </Link>{" "}
    </h1>
  );
}
