import { Link, useLoaderData } from "react-router-dom";
import { getUser } from "../api/users";

function User() {
  const user = useLoaderData();
  return (
    <div className="container">
      <h1 className="page-title">{user.name}</h1>
      <div className="page-subtitle">{user.email}</div>
      <div>
        <b>Company:</b> {user.company.name}
      </div>
      <div>
        <b>Website:</b> {user.website}
      </div>
      <div>
        <b>Address:</b>{" "}
        {`${user.address.street} ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`}
      </div>
      <br />
      <div>
        <Link className="btn" to="..">
          Back
        </Link>
      </div>
    </div>
  );
}

function loader({ params, request: { signal } }) {
  return getUser(params.userId, signal);
}

export const UserRoute = {
  element: <User />,
  loader,
};
