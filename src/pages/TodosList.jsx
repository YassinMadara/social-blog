import { useLoaderData } from "react-router-dom";
import SearchForm from "../components/SearchForm";
import TodoComponent from "../components/TodoComponent";

export default function TodosList() {
  const { todos, query } = useLoaderData();
  return (
    <div className="container">
      <h1 className="page-title">Todos - {todos.length}</h1>
      <SearchForm query={query} />
      <ul>{<TodoComponent todos={todos} />}</ul>
    </div>
  );
}
