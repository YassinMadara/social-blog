import { Link, useLoaderData } from "react-router-dom";

export default function Post() {
  const { post, user } = useLoaderData();
  return (
    <div className="container">
      <h1 className="page-title">{post.title}</h1>
      <span className="page-subtitle">
        By: <Link to={`/users/${user.id}`}>{user.name}</Link>
      </span>
      <div>{post.body}</div>
      <br />
      <div>
        <Link className="btn" to="..">
          Back
        </Link>
      </div>
    </div>
  );
}
