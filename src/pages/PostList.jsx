import { Link, useLoaderData } from "react-router-dom";
import { getPosts } from "../api/posts";
import PostComponent from "../components/PostComponent";
import SearchForm from "../components/SearchForm";
import { getQuery } from "../router";

function PostList() {
  const { posts, query } = useLoaderData();
  return (
    <div className="container">
      <h1 className="page-title">
        Posts - {posts.length}{" "}
        <div className="title-btns">
          <Link className="btn btn-outline" to="new">
            New
          </Link>
        </div>
      </h1>
      <SearchForm query={query} />
      <br />
      <div className="card-grid">{<PostComponent posts={posts} />}</div>
    </div>
  );
}

async function loader({ request: { signal, url } }) {
  const query = getQuery(url, "query");

  return {
    posts: await getPosts({ signal, params: { q: query } }),
    query,
  };
}

export const PostListRoute = {
  loader,
  element: <PostList />,
};
