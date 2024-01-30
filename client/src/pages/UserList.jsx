import { Link, useLoaderData } from "react-router-dom";
import SearchForm from "../components/SearchForm";
import UserComponent from "../components/UserComponent";

export default function UserList() {
  const { users, query } = useLoaderData();
  return (
    <div className="container">
      <h1 className="page-title">Users</h1>
      {<SearchForm query={query} />}
      <br />
      <div className="card-grid">{<UserComponent users={users} />}</div>
    </div>
  );
}
