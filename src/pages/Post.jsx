import { Link, useLoaderData } from "react-router-dom";
import { getPost } from "../api/posts";
import { getUser } from "../api/users";

function Post() {
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

async function loader({ params, request: { signal } }) {
  const post = await getPost(params.postId, { signal });
  const user = getUser(post.userId, { signal });

  return {
    post,
    user: await user,
  };
}

export const PostRoute = {
  loader,
  element: <Post />,
};
