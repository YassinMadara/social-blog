import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import PostComponent from "../components/PostComponent";
import SearchForm from "../components/SearchForm";

export default function PostList() {
  const { posts, query } = useLoaderData();
  // const [queryInput, setQueryInput] = useState(query);
  return (
    <div className="container">
      <h1 className="page-title">Posts - {posts.length}</h1>
      <SearchForm
        query={query}
        // queryInput={queryInput}
        // setQueryInput={setQueryInput}
      />
      <br />
      <div className="card-grid">
        {
          <PostComponent
            posts={posts}
            // queryInput={queryInput}
          />
        }
      </div>
    </div>
  );
}
